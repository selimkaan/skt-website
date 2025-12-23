import { getAllPosts, getAllCategories } from '@/lib/wordpress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Navbar />
      <Hero />
      <BlogList posts={posts} categories={categories} />
      <Footer />
    </div>
  );
}

