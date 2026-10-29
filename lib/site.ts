import type { Metadata } from 'next';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.selimkaantopac.com').replace(/\/$/, '');

// Next.js replaces openGraph wholesale when a page defines it, so pages spread this to keep shared fields.
export const baseOpenGraph: NonNullable<Metadata['openGraph']> = {
  type: 'website',
  locale: 'tr_TR',
  siteName: 'Selim Kaan Topaç Blog',
  title: 'Selim Kaan Topaç | Blog',
  description: 'Yatırım, girişimcilik ve hayata dair düşünceler.',
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Selim Kaan Topaç Blog',
    },
  ],
};
