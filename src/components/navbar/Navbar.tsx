'use client';

import { Cart } from '@/components/cart/Cart';
import { Logo } from '@/components/logo/Logo';
import { AuthMenu } from '@/components/navbar/AuthMenu';
import { TextLink } from '@/components/text-Link/TextLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  if (pathname === '/profile/create') return null;
  return (
    <nav className='shadow-sm py-5 bg-white sticky top-0'>
      <div className='flex flex-nowrap justify-between items-center max-w-screen-lg w-full mx-auto px-5'>
        <Link href='/'>
          <div className='flex flex-nowrap items-center'>
            <Logo className='mr-3 rounded' />
            <h1 className='text-2xl'>Ticketpond</h1>
          </div>
        </Link>
        <div className='flex flex-nowrap items-center gap-5'>
          <TextLink className='text-lg' href='/'>
            Főoldal
          </TextLink>
          <TextLink className='text-lg' href='/experience'>
            Élmények
          </TextLink>
          <TextLink className='text-lg' href='/merchant/admin'>
            Admin
          </TextLink>
          <AuthMenu />
          <Cart />
        </div>
      </div>
    </nav>
  );
}
