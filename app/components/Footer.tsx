import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-serif font-bold hover:opacity-70 transition-opacity">
            Selim Kaan Topaç
          </Link>
          <p className="text-sm text-gray-400 mt-2 italic">Düşünceler, Notlar ve Serüvenler.</p>
        </div>
        
        <div className="flex space-x-10 text-sm font-medium tracking-widest uppercase text-gray-500">
          <a 
            href="https://x.com/selimkaan_t" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://www.linkedin.com/in/selim-kaan-topac/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/selimkaan.t/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>
        </div>

        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Selim Kaan Topaç. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}


