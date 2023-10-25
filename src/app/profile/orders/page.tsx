'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useOrders } from '@/hooks/customer/order/useOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function ProfileOrdersPage() {
  const { data, isLoading } = useOrders();
  return (
    <main>
      <h1>Rendeléseim</h1>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((order) => (
          <li key={order.id}>
            <OrderListItem order={order} href={`/profile/orders/${order.id}`} />
          </li>
        ))}
      </ul>
    </main>
  );
});
