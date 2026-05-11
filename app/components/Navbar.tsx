'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-serif font-bold tracking-tight hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Selim Kaan Topaç
        </Link>
        
        <div className="flex flex-col items-end gap-1 md:flex-row md:items-center md:space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 shrink-0">
          <Link href="/hakkimda" className={`hover:text-black transition-colors ${pathname === '/hakkimda' ? 'text-black' : ''}`}>
            Hakkımda
          </Link>
          <Link href="/" className={`hover:text-black transition-colors ${pathname === '/' ? 'text-black' : ''}`}>
            Yazılar
          </Link>
        </div>
      </div>
    </nav>
  );
}
