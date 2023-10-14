'use client';

import { DataCard } from '@/components/data-card/DataCard';
import { useMerchantMe } from '@/hooks/useMerchantMe';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MerchantProfilePage() {
  const { data } = useMerchantMe();
  if (!data) return <></>;
  return (
    <main>
      <h1>
        Kereskedő profil <span className='text-slate-300'>| {data.name}</span>
      </h1>
      <p>{data.description}</p>
      <DataCard phone={data.phone} email={data.email} address={data.address} />
    </main>
  );
});
