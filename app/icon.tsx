import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/lib/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
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
          borderRadius: 12,
          fontFamily: 'Playfair Display',
          fontSize: 48,
          paddingBottom: 4,
        }}
      >
        S
      </div>
    ),
    { ...size, fonts: [{ name: 'Playfair Display', data: font, weight: 700 }] },
  );
}
