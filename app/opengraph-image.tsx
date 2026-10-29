import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/lib/og';

export const alt = 'Selim Kaan Topaç Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const QUOTE = '“Yatırım, girişimcilik ve hayata dair düşünceler.”';
const NAME = 'SELİM KAAN TOPAÇ';
const DOMAIN = 'selimkaantopac.com';

export default async function OpengraphImage() {
  const [serifItalic, sans] = await Promise.all([
    loadGoogleFont('Playfair+Display:ital,wght@1,400', QUOTE),
    loadGoogleFont('Inter:wght@500', NAME + DOMAIN),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          color: '#1a1a1a',
          padding: '0 120px',
        }}
      >
        <div
          style={{
            fontFamily: 'Playfair Display',
            fontStyle: 'italic',
            fontSize: 72,
            lineHeight: 1.15,
            textAlign: 'center',
          }}
        >
          {QUOTE}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 64, opacity: 0.45 }}>
          <div style={{ display: 'flex', flexShrink: 0, width: 80, height: 2, background: '#1a1a1a' }} />
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 22,
              letterSpacing: '0.3em',
              margin: '0 32px',
            }}
          >
            {NAME}
          </div>
          <div style={{ display: 'flex', flexShrink: 0, width: 80, height: 2, background: '#1a1a1a' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            fontFamily: 'Inter',
            fontSize: 20,
            color: '#9ca3af',
          }}
        >
          {DOMAIN}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Playfair Display', data: serifItalic, style: 'italic', weight: 400 },
        { name: 'Inter', data: sans, style: 'normal', weight: 500 },
      ],
    },
  );
}
