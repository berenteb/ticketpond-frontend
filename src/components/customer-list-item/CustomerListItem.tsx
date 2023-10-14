import { CustomerDto } from '@/api';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface CustomerListItemProps extends HTMLAttributes<HTMLDivElement> {
  customer: CustomerDto;
}

export function CustomerListItem({ customer, className, ...props }: CustomerListItemProps) {
  return (
    <Link href={`/admin/customer/${customer.id}`}>
      <Card className={clsx('flex items-center gap-5 justify-between p-5', className)} {...props}>
        <h3 className='text-xl font-bold'>{customer.email}</h3>
        <span className='text-gray-500'>
          <TbChevronRight size={30} />
        </span>
      </Card>
    </Link>
  );
}
