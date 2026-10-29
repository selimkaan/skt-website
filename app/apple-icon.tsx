import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/lib/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const font = await loadGoogleFont('Playfair+Display:wght@700', 'S');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
          color: '#ffffff',
          fontFamily: 'Playfair Display',
          fontSize: 132,
          paddingBottom: 10,
        }}
      >
        S
      </div>
    ),
    { ...size, fonts: [{ name: 'Playfair Display', data: font, weight: 700 }] },
  );
}
