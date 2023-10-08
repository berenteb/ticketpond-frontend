'use client';

import { Cart } from '@/components/cart/Cart';
import { AuthMenu } from '@/components/navbar/AuthMenu';
import { TextLink } from '@/components/text-Link/TextLink';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  if (pathname === '/profile/create') return null;
  return (
    <nav className='shadow-sm py-5 bg-white sticky top-0'>
      <div className='flex flex-nowrap justify-between items-center max-w-screen-lg w-full mx-auto px-5'>
        <div className='flex flex-nowrap items-center'>
          <h1 className='text-2xl'>Ticketpond</h1>
        </div>
        <div className='flex flex-nowrap items-center gap-5'>
          <TextLink className='text-lg' href='/'>
            Főoldal
          </TextLink>
          <TextLink className='text-lg' href='/experiences'>
            Élmények
          </TextLink>
          <AuthMenu />
          <Cart />
        </div>
      </div>
    </nav>
  );
}
