'use client';

import { Badge } from '@/components/badge/Badge';
import { Button } from '@/components/button/Button';
import { ConfirmDialog } from '@/components/confirm-dialog/ConfirmDialog';
import { DataCard } from '@/components/data-card/DataCard';
import { OrderItemGroup } from '@/components/order-item-card/OrderItemGroup';
import { Spinner } from '@/components/spinner/Spinner';
import { useAdminOrder } from '@/hooks/admin/order/useAdminOrder';
import { useAdminOrderCancel } from '@/hooks/admin/order/useAdminOrderCancel';
import { useAdminOrderFulfill } from '@/hooks/admin/order/useAdminOrderFulfill';
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
import { TbCheck, TbShoppingCartCancel } from 'react-icons/tb';

export default withPageAuthRequired(function AdminOrderPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, isLoading, mutate } = useAdminOrder(id);
  const fulfillOrder = useAdminOrderFulfill(id, mutate);
  const cancelOrder = useAdminOrderCancel(id, mutate);

  const groupedItems = useMemo(() => {
    return groupItemsByExperience(data?.items ?? []);
  }, [data?.items]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <h2>
        Rendelés megtekintése <span className='text-slate-300'>| {data?.serialNumber ?? 'Ismeretlen'}</span>
      </h2>
      <h3>Státusz állítása</h3>
      <div className='flex gap-3'>
        <ConfirmDialog
          trigger={(onOpen) => (
            <Button isLoading={fulfillOrder.isMutating} iconBefore={TbCheck} variant='secondary' onClick={onOpen}>
              Teljesítve
            </Button>
          )}
          onConfirm={() => fulfillOrder.trigger()}
          title='Rendelés teljesítése'
          description='Biztosan teljesíteni szeretnéd a rendelést? Ezzel együtt a belépők is elkészülnek.'
        />

        <ConfirmDialog
          trigger={(onOpen) => (
            <Button
              isLoading={cancelOrder.isMutating}
              iconBefore={TbShoppingCartCancel}
              variant='secondary'
              onClick={onOpen}
            >
              Visszavonás
            </Button>
          )}
          onConfirm={() => cancelOrder.trigger()}
          title='Rendelés visszavonása'
          description='Biztosan szeretnéd visszavonni a rendelést?'
        />
      </div>
      {data && (
        <>
          <DataCard
            name={`${data.customer.lastName} ${data.customer.firstName}`}
            email={data.customer.email}
            phone={data.customer.phone}
          />
          <div className='flex gap-3'>
            <Badge text={OrderStatusBadgeText[data.orderStatus]} color={OrderStatusBadgeColor[data.orderStatus]} />
            <Badge
              text={PaymentStatusBadgeText[data.paymentStatus]}
              color={PaymentStatusBadgeColor[data.paymentStatus]}
            />
          </div>
          <div className='flex flex-col gap-5'>
            {groupedItems.map((group) => (
              <OrderItemGroup key={group.experience.id} groupedItems={group} />
            ))}
          </div>
        </>
      )}
    </>
  );
});
