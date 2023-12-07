import { MerchantDto } from '@/api';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface MerchantListItemProps extends HTMLAttributes<HTMLDivElement> {
  merchant: MerchantDto;
}

export function MerchantListItem({ merchant, className, ...props }: MerchantListItemProps) {
  return (
    <Link href={`/admin/merchant/${merchant.id}`}>
      <Card className={clsx('flex items-center gap-5 justify-between p-5', className)} {...props}>
        <h3 className='text-xl font-bold'>{merchant.name}</h3>
        <span className='text-gray-500'>
          <TbChevronRight size={30} />
        </span>
      </Card>
    </Link>
  );
}
