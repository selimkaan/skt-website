import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'Selim Kaan Topaç hakkında. Yatırım, teknoloji ve hayata dair düşünceler.',
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/selimkaan.t/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/selim-kaan-topac/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/selimkaan_t',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/selimkaan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: '1K Kitap',
    href: 'https://1000kitap.com/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

const interests = [
  'Teknoloji', 'Finans', 'Uluslararası İlişkiler', 'Jeopolitika',
  'Makroekonomi', 'Enerji Sektörü', 'Fizik', 'Yapay Zeka',
  'Yelkencilik', 'Basketbol', 'Seyahat',
];

export default function HakkimdaPage() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Navbar />

      <main className="pt-24">

        {/* Hero: Photo + Intro */}
        <section className="max-w-[1400px] mx-auto px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

            {/* Left: Intro */}
            <div className="md:col-span-5 order-2 md:order-1">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-4">
                Hakkımda
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Selim Kaan<br />Topaç
              </h1>
              <div className="w-12 h-px bg-gray-300 mb-6" />
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
                Yatırım yolculuğuma dair notlarımı, iş hayatına dair serüvenim ve fikirlerimi bunların yanında da hayata dair kaleme almak istediğim çeşitli konuları yazıyorum.
              </p>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-bold border border-gray-900 rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                CV&apos;mi Görüntüle
              </a>
            </div>

            {/* Right: Photo */}
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative overflow-hidden rounded-2xl group">
                <Image
                  src="/profile.jpeg"
                  alt="Selim Kaan Topaç"
                  width={800}
                  height={1000}
                  className="w-full h-[500px] md:h-[640px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-t border-gray-200" />
        </div>

        {/* About Text */}
        <section className="max-w-[1400px] mx-auto px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                &ldquo;Merak ettikçe<br />öğreniyor,<br />öğrendikçe<br />yazıyorum.&rdquo;
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-6 text-gray-500 leading-[1.8] text-base md:text-[17px]">
                <p>
                  Merhaba, ben Selim Kaan. Teknoloji, finans ve uluslararası ilişkiler başta olmak üzere birçok farklı alanda araştırma yapmayı ve öğrendiklerimi paylaşmayı seven biriyim. Bu blog, düşüncelerimi ve deneyimlerimi kaleme aldığım kişisel alanım.
                </p>
                <p>
                  Yatırım dünyasına olan ilgim beni makroekonomi, enerji sektörü ve jeopolitika gibi alanlarda derinleşmeye yönlendirdi. Piyasaları takip ederken sadece rakamlarla değil, arkasındaki hikâyelerle de ilgileniyorum. Her yatırım kararının bir dünya görüşünü yansıttığına inanıyorum.
                </p>
                <p>
                  Teknoloji tarafında ise yazılım geliştirme, yapay zeka ve yeni nesil teknolojileri yakından takip ediyorum. Teknevia projesiyle teknoloji dünyasındaki gelişmeleri Türkçe olarak aktarmaya çalışıyorum. Kodlamayı sadece bir araç olarak değil, düşünce biçimi olarak görüyorum.
                </p>
                <p>
                  Hayatın sadece iş ve kariyer olmadığına inanıyorum. Yelkencilik tutkumla denizde vakit geçirmeyi, basketbol oynayarak enerjimi atmayı ve seyahat ederek yeni kültürler keşfetmeyi seviyorum. Şimdiye kadar 5 farklı ülke ziyaret ettim ve bu sayıyı artırmaya devam ediyorum.
                </p>
                <p>
                  Bu blog, tüm bu ilgi alanlarımın kesiştiği bir alan. Burada yatırım notlarımı, teknoloji analizlerimi, kitap özetlerimi ve hayata dair gözlemlerimi bulabilirsiniz. Amacım sadece yazmak değil, yazdıklarımla düşünmeye teşvik etmek.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-t border-gray-200" />
        </div>

        {/* Stats + Social + Interests */}
        <section className="max-w-[1400px] mx-auto px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            {/* Stats */}
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-8">
                Rakamlarla
              </p>
              <div>
                <span className="font-serif text-5xl md:text-6xl">5</span>
                <p className="text-sm text-gray-400 mt-2 tracking-wide">Gezilen Ülke</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-8">
                Beni Takip Edin
              </p>
              <div className="space-y-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-500 group hover:text-black transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="text-sm tracking-wide">{link.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-8">
                İlgi Alanlarım
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
