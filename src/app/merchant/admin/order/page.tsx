'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { useOrdersForMerchant } from '@/hooks/useOrdersForMerchant';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MerchantOrderList() {
  const { data } = useOrdersForMerchant();
  if (!data)
    return (
      <>
        <h2>Rendelések</h2>
        <p>Betöltés...</p>
      </>
    );
  return (
    <>
      <h2>Rendelések</h2>
      <ul className='flex flex-col gap-5'>
        {data.map((order) => (
          <li key={order.id}>
            <OrderListItem order={order} href={`/merchant/admin/order/${order.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
