import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block cursor-pointer bg-white transition-all duration-500 border border-gray-100 p-5 rounded-sm hover:border-black/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-gray-100">
        {post.featuredImage ? (
          <Image 
            src={post.featuredImage} 
            alt={post.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 font-serif text-4xl opacity-50">{post.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
      </div>
      <div className="space-y-4">
        <p className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase">
          {post.date} <span className="mx-2 text-gray-300">•</span> {post.category}
        </p>
        <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] leading-tight group-hover:text-black transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}


