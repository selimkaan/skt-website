import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-serif font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors rounded-sm"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}


