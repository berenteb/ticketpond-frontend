import { DeepTicketDto } from '@/api';
import { CartItemStepper } from '@/components/cart-control-button/CartItemStepper';
import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

interface CartTicketItemProps extends HTMLAttributes<HTMLDivElement> {
  ticket: DeepTicketDto;
  count: number;
  onCountChange?: () => void;
}

export function CartTicketItem({ ticket, count, className, onCountChange, ...props }: CartTicketItemProps) {
  return (
    <div className={clsx('flex justify-between items-center gap-5 p-5 w-full', className)} {...props}>
      <div>
        <h3 className='text-xl font-bold'>{ticket.name}</h3>
        <p className='text-gray-500'>{ticket.description}</p>
      </div>
      <div className='flex gap-5 items-center'>
        <p className='font-bold text-lg'>{ticket.price.toLocaleString()} Ft</p>
        <CartItemStepper onCountChange={onCountChange} ticketId={ticket.id} count={count} />
      </div>
    </div>
  );
}
