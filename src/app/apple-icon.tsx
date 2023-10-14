import { Logo } from '@/components/logo/Logo';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<Logo className='rounded' />, {
    ...size,
  });
}
