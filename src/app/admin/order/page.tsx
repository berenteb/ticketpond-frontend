'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { useOrders } from '@/hooks/useOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminOrderList() {
  const { data } = useOrders();
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
            <OrderListItem order={order} />
          </li>
        ))}
      </ul>
    </>
  );
});
