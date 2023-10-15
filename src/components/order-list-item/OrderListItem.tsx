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
      <Card className={clsx('flex items-center gap-5 justify-between p-5', className)} {...props}>
        <div className='text-left'>
          <h3 className='text-xl font-bold'>{order.serialNumber}</h3>
          <p className='text-gray-500'>{order.items.length} tétel</p>
        </div>
        <div className='flex gap-5 items-center'>
          <Badge text={OrderStatusBadgeText[order.orderStatus]} color={OrderStatusBadgeColor[order.orderStatus]} />
          <Badge
            text={PaymentStatusBadgeText[order.paymentStatus]}
            color={PaymentStatusBadgeColor[order.paymentStatus]}
          />
          <p className='text-xl font-bold text-gray-500'>{sumPrice.toLocaleString()} Ft</p>
          <span className='text-gray-500'>
            <TbChevronRight size={30} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
