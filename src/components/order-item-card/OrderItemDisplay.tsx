import { DeepOrderItemDto } from '@/api';
import { PassDisplay } from '@/components/pass-display/PassDisplay';
import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

interface OrderItemDisplayProps extends HTMLAttributes<HTMLDivElement> {
  item: DeepOrderItemDto;
  isPaid?: boolean;
}

export function OrderItemDisplay({ item, isPaid, className, ...props }: OrderItemDisplayProps) {
  return (
    <div className={clsx('flex justify-between items-center gap-5 p-5 w-full', className)} {...props}>
      <div>
        <h3 className='text-xl font-bold'>{item.serialNumber}</h3>
        <p className='text-gray-500'>{item.ticket.name}</p>
      </div>
      <div className='flex gap-5 items-center'>
        {isPaid && <PassDisplay orderItem={item} />}
        <p className='font-bold text-lg whitespace-nowrap'>{item.ticket.price.toLocaleString()} Ft</p>
      </div>
    </div>
  );
}
