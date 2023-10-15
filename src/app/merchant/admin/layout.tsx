'use client';

import { useMerchantMe } from '@/hooks/useMerchantMe';

export default function MerchantAdminLayout({ children }: { children: React.ReactNode }) {
  const { data } = useMerchantMe();
  if (!data) return <></>;
  return (
    <main>
      <h1>
        Admin <span className='text-slate-300'>| {data.name}</span>
      </h1>
      {children}
    </main>
  );
}
