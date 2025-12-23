import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/lib/wordpress';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Revalidate every 60 seconds
export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts (optional - for SSG)
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.dateISO,
      authors: [post.author.name],
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Navbar />
      
      <article className="animate-in fade-in duration-500">
        {/* Header Section */}
        <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-black transition-colors mb-12 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium tracking-wide">Geri Dön</span>
            </Link>

            <header className="space-y-6 mb-16">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              {/* Author info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 mt-8">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
            <div className="mb-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                <Image 
                  src={post.featuredImage} 
                  alt={post.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pb-32">
          {/* Excerpt as lead paragraph */}
          <p className="text-xl font-medium leading-relaxed italic text-gray-600 border-l-4 border-gray-200 pl-6 mb-12">
            {post.excerpt}
          </p>
          
          {/* Main content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Post footer */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-serif font-bold text-lg">{post.author.name}</p>
                  <p className="text-sm text-gray-500">Yazar</p>
                </div>
              </div>
              
              <Link 
                href="/"
                className="px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors rounded-sm"
              >
                Tüm Yazılar
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}


