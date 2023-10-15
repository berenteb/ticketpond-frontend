'use client';

import { TextLink } from '@/components/text-Link/TextLink';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className='flex justify-between items-center'>
        <h1>Szuperadmin</h1>
        <TextLink href='/admin'>Admin kezdőlap</TextLink>
      </div>
      {children}
    </main>
  );
}
