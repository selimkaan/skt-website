// WordPress.com REST API Types
export interface WordPressPost {
  ID: number;
  site_ID: number;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  featured_image: string;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  categories: Record<string, WordPressCategory>;
  tags: Record<string, WordPressTag>;
  attachments: Record<string, WordPressAttachment>;
  attachment_count: number;
  metadata: WordPressMetadata[];
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
      replies: string;
      likes: string;
    };
  };
  author: WordPressAuthor;
}

export interface WordPressCategory {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
    };
  };
}

export interface WordPressTag {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
    };
  };
}

export interface WordPressAttachment {
  ID: number;
  URL: string;
  guid: string;
  mime_type: string;
  width: number;
  height: number;
}

export interface WordPressMetadata {
  id: string;
  key: string;
  value: string;
}

export interface WordPressAuthor {
  ID: number;
  login: string;
  email: boolean;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

export interface WordPressPostsResponse {
  found: number;
  posts: WordPressPost[];
  meta: {
    links: {
      counts: string;
    };
    next_page?: string;
  };
}

// Our normalized blog post type
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateISO: string;
  category: string;
  categorySlug: string;
  featuredImage: string | null;
  author: {
    name: string;
    avatar: string;
  };
}

// Category filter type
export type CategoryFilter = "Hepsi" | string;


