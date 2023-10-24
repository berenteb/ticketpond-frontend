'use client';

import { Badge } from '@/components/badge/Badge';
import { DataCard } from '@/components/data-card/DataCard';
import { OrderItemGroup } from '@/components/order-item-card/OrderItemGroup';
import { useMerchantOrder } from '@/hooks/merchant/order/useMerchantOrder';
import {
  groupItemsByExperience,
  OrderStatusBadgeColor,
  OrderStatusBadgeText,
  PaymentStatusBadgeColor,
  PaymentStatusBadgeText,
} from '@/utils/order.utils';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export default withPageAuthRequired(function MerchantOrderPage() {
  const params = useParams();
  const { data } = useMerchantOrder(Array.isArray(params.id) ? params.id[0] : params.id);
  const groupedItems = useMemo(() => {
    return groupItemsByExperience(data?.items ?? []);
  }, [data?.items]);
  if (!data) return null;
  return (
    <>
      <h2>
        Rendelés megtekintése <span className='text-slate-300'>| {data.serialNumber}</span>
      </h2>
      <DataCard
        name={`${data.customer.lastName} ${data.customer.firstName}`}
        email={data.customer.email}
        phone={data.customer.phone}
      />
      <div className='flex gap-3'>
        <Badge text={OrderStatusBadgeText[data.orderStatus]} color={OrderStatusBadgeColor[data.orderStatus]} />
        <Badge text={PaymentStatusBadgeText[data.paymentStatus]} color={PaymentStatusBadgeColor[data.paymentStatus]} />
      </div>
      <div className='flex flex-col gap-5'>
        {groupedItems.map((group) => (
          <OrderItemGroup key={group.experience.id} groupedItems={group} />
        ))}
      </div>
    </>
  );
});
