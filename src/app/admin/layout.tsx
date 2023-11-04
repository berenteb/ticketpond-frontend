'use client';

import { TextLink } from '@/components/text-Link/TextLink';
import { Title } from '@/components/title/Title';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className='flex justify-between items-center'>
        <Title>Szuperadmin</Title>
        <h1>Szuperadmin</h1>
        <TextLink href='/admin'>Admin kezdőlap</TextLink>
      </div>
      {children}
    </main>
  );
}
