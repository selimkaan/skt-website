'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/types';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';

interface BlogListProps {
  posts: BlogPost[];
  categories: { name: string; slug: string }[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('hepsi');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'hepsi') return posts;
    return posts.filter(post => post.categorySlug === selectedCategory);
  }, [selectedCategory, posts]);

  return (
    <>
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <main className="max-w-[1400px] mx-auto px-8 mb-40">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <p className="text-gray-400 text-lg font-serif italic">
              Bu kategoride henüz bir yazı bulunmuyor.
            </p>
          </div>
        )}
      </main>
    </>
  );
}


