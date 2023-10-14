'use client';

import { MerchantListItem } from '@/components/merchant-list-item/MerchantListItem';
import { useMerchants } from '@/hooks/useMerchants';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminMerchantList() {
  const { data } = useMerchants();
  if (!data)
    return (
      <main>
        <h1>Kereskedők</h1>
        <p>Betöltés...</p>
      </main>
    );
  return (
    <main>
      <h1>Kereskedők</h1>
      <ul className='flex flex-col gap-5'>
        {data.map((merchant) => (
          <li key={merchant.id}>
            <MerchantListItem merchant={merchant} />
          </li>
        ))}
      </ul>
    </main>
  );
});
