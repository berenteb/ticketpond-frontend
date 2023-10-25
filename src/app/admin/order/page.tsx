'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useAdminOrders } from '@/hooks/admin/order/useAdminOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminOrderList() {
  const { data, isLoading } = useAdminOrders();
  return (
    <>
      <h2>Rendelések</h2>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((order) => (
          <li key={order.id}>
            <OrderListItem order={order} href={`/admin/order/${order.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
