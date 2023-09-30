import { TicketDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';
import { TbShoppingCart } from 'react-icons/tb';

interface TicketCardProps extends HTMLAttributes<HTMLDivElement> {
  ticket: TicketDto;
}

export function TicketCard({ ticket, className, ...props }: TicketCardProps) {
  return (
    <Card className={clsx('flex justify-between items-center gap-5 p-5', className)} {...props}>
      <div>
        <h3 className='text-xl font-bold'>{ticket.name}</h3>
        <p className='text-gray-500'>{ticket.description}</p>
      </div>
      <div className='flex gap-5 items-center'>
        <p className='font-bold text-lg'>{ticket.price} Ft</p>
        <Button iconBefore={TbShoppingCart} />
      </div>
    </Card>
  );
}
