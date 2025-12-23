import { WordPressPost, WordPressPostsResponse, BlogPost } from './types';

// WordPress.com REST API endpoint
const WORDPRESS_COM_API = 'https://public-api.wordpress.com/rest/v1.1';
const SITE_ID = 'selimkaantpc.wordpress.com';

// Self-hosted WordPress REST API (for future use)
// const SELF_HOSTED_API = 'https://wp.selimkaantopac.com/wp-json/wp/v2';

/**
 * Format date to Turkish locale
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  return `${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Strip HTML tags from content
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Get the first category from a WordPress post
 */
function getFirstCategory(categories: Record<string, { name: string; slug: string }>): { name: string; slug: string } {
  const categoryValues = Object.values(categories);
  if (categoryValues.length > 0) {
    return { name: categoryValues[0].name, slug: categoryValues[0].slug };
  }
  return { name: 'Genel', slug: 'genel' };
}

/**
 * Extract featured image from post
 */
function getFeaturedImage(post: WordPressPost): string | null {
  // First check featured_image field
  if (post.featured_image) {
    return post.featured_image;
  }
  
  // Then check attachments
  const attachments = Object.values(post.attachments || {});
  const imageAttachment = attachments.find(att => att.mime_type?.startsWith('image/'));
  if (imageAttachment) {
    return imageAttachment.URL;
  }
  
  // Try to extract first image from content
  const imgMatch = post.content.match(/<img[^>]+src="([^"]+)"/);
  if (imgMatch) {
    return imgMatch[1];
  }
  
  return null;
}

/**
 * Transform WordPress.com post to our BlogPost format
 */
function transformPost(post: WordPressPost): BlogPost {
  const category = getFirstCategory(post.categories);
  
  return {
    id: post.ID.toString(),
    slug: post.slug,
    title: post.title,
    excerpt: stripHtml(post.excerpt) || stripHtml(post.content).substring(0, 160) + '...',
    content: post.content,
    date: formatDate(post.date),
    dateISO: post.date,
    category: category.name,
    categorySlug: category.slug,
    featuredImage: getFeaturedImage(post),
    author: {
      name: post.author.name,
      avatar: post.author.avatar_URL,
    },
  };
}

/**
 * Fetch all published posts from WordPress.com
 */
export async function getAllPosts(limit: number = 100): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_COM_API}/sites/${SITE_ID}/posts?number=${limit}&status=publish`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data: WordPressPostsResponse = await response.json();
    return data.posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_COM_API}/sites/${SITE_ID}/posts/slug:${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const post: WordPressPost = await response.json();
    return transformPost(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Fetch posts by category slug
 */
export async function getPostsByCategory(categorySlug: string, limit: number = 100): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_COM_API}/sites/${SITE_ID}/posts?category=${categorySlug}&number=${limit}&status=publish`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data: WordPressPostsResponse = await response.json();
    return data.posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

/**
 * Fetch all categories from posts
 */
export async function getAllCategories(): Promise<{ name: string; slug: string }[]> {
  const posts = await getAllPosts();
  const categoryMap = new Map<string, { name: string; slug: string }>();
  
  posts.forEach(post => {
    if (!categoryMap.has(post.categorySlug)) {
      categoryMap.set(post.categorySlug, {
        name: post.category,
        slug: post.categorySlug,
      });
    }
  });
  
  return Array.from(categoryMap.values());
}

/**
 * Get all post slugs (for static generation)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map(post => post.slug);
}


