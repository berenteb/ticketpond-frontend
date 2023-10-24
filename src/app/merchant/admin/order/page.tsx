'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { useMerchantOrders } from '@/hooks/merchant/order/useMerchantOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MerchantOrderList() {
  const { data } = useMerchantOrders();
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
