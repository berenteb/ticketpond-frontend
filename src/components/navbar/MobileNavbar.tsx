'use client';

import { Cart } from '@/components/cart/Cart';
import { Logo } from '@/components/logo/Logo';
import { AdminMenu } from '@/components/navbar/AdminMenu';
import { AuthMenu } from '@/components/navbar/AuthMenu';
import { TextLink } from '@/components/text-Link/TextLink';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbMenu, TbX } from 'react-icons/tb';

export function MobileNavbar() {
  const pathname = usePathname();
  if (pathname === '/profile/create') return null;
  return (
    <nav className='shadow-sm p-5 bg-white sticky top-0 md:hidden'>
      <Disclosure>
        <div className='flex gap-5 justify-between'>
          <Link href='/'>
            <div className='flex flex-nowrap items-center'>
              <Logo className='mr-3 rounded' />
              <h1 className='text-2xl'>Ticketpond</h1>
            </div>
          </Link>
          <div className='flex'>
            <Cart />
            <Disclosure.Button className='p-3'>
              {({ open }) => (open ? <TbX size={20} /> : <TbMenu size={20} />)}
            </Disclosure.Button>
          </div>
        </div>
        <Disclosure.Panel className='flex flex-col gap-3'>
          <TextLink className='text-lg w-full' href='/'>
            Főoldal
          </TextLink>
          <TextLink className='text-lg w-full' href='/experience'>
            Élmények
          </TextLink>
          <AdminMenu />
          <AuthMenu />
        </Disclosure.Panel>
      </Disclosure>
    </nav>
  );
}
