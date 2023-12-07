'use client';

import { OrderDto } from '@/api';
import { OrderListItem } from '@/components/order-list-item/OrderListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { Title } from '@/components/title/Title';
import { useOrders } from '@/hooks/customer/order/useOrders';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { isSameDay } from 'date-fns';
import { Fragment, useMemo } from 'react';

export default withPageAuthRequired(function ProfileOrdersPage() {
  const { data, isLoading } = useOrders();
  const groupedDates = useMemo(() => groupOrdersByDate(data ?? []), [data]);
  return (
    <main>
      <Title>Rendeléseim</Title>
      <h1>Rendeléseim</h1>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {groupedDates.toSorted(sortByDate).map((group) => (
          <Fragment key={group.date.toLocaleDateString()}>
            <h2 className='mt-5'>{group.date.toLocaleDateString()}</h2>
            {group.orders.toSorted(sortOrdersByDate).map((order) => (
              <li key={order.id}>
                <OrderListItem order={order} href={`/profile/orders/${order.id}`} />
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    </main>
  );
});

function sortByDate(a: OrdersByDate, b: OrdersByDate) {
  return b.date.getTime() - a.date.getTime();
}

function sortOrdersByDate(a: OrderDto, b: OrderDto) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

function groupOrdersByDate(orders: OrderDto[]): OrdersByDate[] {
  const dates = orders.map((order) => new Date(order.createdAt));
  const uniqueDates = dates.reduce<Date[]>((acc, date) => {
    if (acc.some((d) => isSameDay(d, date))) return acc;
    return [...acc, date];
  }, []);
  return uniqueDates.map((date) => ({
    date,
    orders: orders.filter((order) => isSameDay(date, new Date(order.createdAt))),
  }));
}

type OrdersByDate = {
  date: Date;
  orders: OrderDto[];
};
