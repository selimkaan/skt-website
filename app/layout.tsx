import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import GoogleAnalytics from './components/GoogleAnalytics';
import { SITE_URL, baseOpenGraph } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Selim Kaan Topaç | Blog',
    template: '%s | Selim Kaan Topaç',
  },
  description: 'Yatırım yolculuğuma dair notlarımı, iş hayatına dair serüvenim ve fikirlerimi bunların yanında da hayata dair kaleme almak istediğim çeşitli konuları yazıyorum.',
  keywords: ['blog', 'yatırım', 'girişimcilik', 'teknoloji', 'kişisel gelişim', 'Selim Kaan Topaç'],
  authors: [{ name: 'Selim Kaan Topaç' }],
  creator: 'Selim Kaan Topaç',
  openGraph: baseOpenGraph,
  twitter: {
    card: 'summary_large_image',
    title: 'Selim Kaan Topaç | Blog',
    description: 'Yatırım, girişimcilik ve hayata dair düşünceler.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}


