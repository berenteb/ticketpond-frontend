'use client';

import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useMerchantOrders } from '@/hooks/merchant/order/useMerchantOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MerchantOrderList() {
  const { data, isLoading } = useMerchantOrders();
  return (
    <>
      <h2>Rendelések</h2>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((order) => (
          <li key={order.id}>
            <OrderListItem order={order} href={`/merchant/admin/order/${order.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
