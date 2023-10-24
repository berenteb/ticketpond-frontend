'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { useOrders } from '@/hooks/customer/order/useOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function ProfileOrdersPage() {
  const { data } = useOrders();
  if (!data) return null;
  return (
    <main>
      <h1>Rendeléseim</h1>
      <ul className='flex flex-col gap-5'>
        {data.map((order) => (
          <li key={order.id}>
            <OrderListItem order={order} href={`/profile/orders/${order.id}`} />
          </li>
        ))}
      </ul>
    </main>
  );
});
