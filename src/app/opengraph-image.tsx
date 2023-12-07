import { Logo } from '@/components/logo/Logo';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Ticketpond';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          backgroundColor: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10%',
          gap: '50px',
        }}
      >
        <Logo width={250} height={250} style={{ borderRadius: '10%' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              color: '#1e293b',
            }}
          >
            Ticketpond
          </h1>
          <p
            style={{
              fontSize: '2rem',
              color: '#64748b',
            }}
          >
            Ahol az élmények kezdődnek.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
