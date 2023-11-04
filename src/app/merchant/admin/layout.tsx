'use client';

import { TextLink } from '@/components/text-Link/TextLink';
import { Title } from '@/components/title/Title';
import { useMerchantMe } from '@/hooks/merchant/profile/useMerchantMe';

export default function MerchantAdminLayout({ children }: { children: React.ReactNode }) {
  const { data } = useMerchantMe();
  if (!data) return <></>;
  return (
    <main>
      <Title>Kereskedő Admin</Title>
      <div className='flex justify-between items-center'>
        <h1>
          Admin <span className='text-slate-300'>| {data.name}</span>
        </h1>
        <TextLink href='/merchant/admin'>Admin kezdőlap</TextLink>
      </div>
      {children}
    </main>
  );
}
