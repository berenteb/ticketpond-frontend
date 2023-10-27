import { OrderDto } from '@/api';
import { Badge } from '@/components/badge/Badge';
import { Card } from '@/components/card/Card';
import {
  OrderStatusBadgeColor,
  OrderStatusBadgeText,
  PaymentStatusBadgeColor,
  PaymentStatusBadgeText,
} from '@/utils/order.utils';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface OrderListItemProps extends HTMLAttributes<HTMLDivElement> {
  order: OrderDto;
  href: string;
}

export function OrderListItem({ order, className, href, ...props }: OrderListItemProps) {
  const sumPrice = order.items.reduce((acc, item) => acc + item.price, 0);
  return (
    <Link href={href}>
      <Card
        className={clsx('flex sm:items-center gap-5 justify-between p-5 flex-col sm:flex-row', className)}
        {...props}
      >
        <div className='text-left truncate'>
          <h3 className='text-xl font-bold truncate'>{order.serialNumber}</h3>
          <p className='text-gray-500'>{order.items.length} tétel</p>
        </div>
        <div className='flex gap-5 items-center max-w-full self-end sm:self-auto'>
          <Badge text={OrderStatusBadgeText[order.orderStatus]} color={OrderStatusBadgeColor[order.orderStatus]} />
          <Badge
            text={PaymentStatusBadgeText[order.paymentStatus]}
            color={PaymentStatusBadgeColor[order.paymentStatus]}
          />
          <p className='text-xl font-bold text-gray-500 whitespace-nowrap'>{sumPrice.toLocaleString()} Ft</p>
          <span className='text-gray-500 hidden sm:block'>
            <TbChevronRight size={30} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
