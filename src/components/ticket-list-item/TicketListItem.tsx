import { DeepTicketDto } from '@/api';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface TicketListItemProps extends HTMLAttributes<HTMLDivElement> {
  ticket: DeepTicketDto;
  href: string;
}

export function TicketListItem({ ticket, href, className, ...props }: TicketListItemProps) {
  return (
    <Link href={href}>
      <Card className={clsx('flex items-center gap-5 justify-between p-5', className)} {...props}>
        <div>
          <h3 className='text-xl font-bold'>{ticket.name}</h3>
          <p>{ticket.experience.name}</p>{' '}
        </div>
        <span className='text-gray-500'>
          <TbChevronRight size={30} />
        </span>
      </Card>
    </Link>
  );
}
