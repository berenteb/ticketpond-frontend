import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { CartTicketItem } from '@/components/cart-item-card/CartTicketItem';
import { GroupedCartItem } from '@/utils/cart.utils';
import { Disclosure } from '@headlessui/react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';

interface CartTicketGroupProps extends HTMLAttributes<HTMLDivElement> {
  groupedItem: GroupedCartItem;
  onCountChange?: () => void;
}

export function CartTicketGroup({ groupedItem, className, onCountChange, ...props }: CartTicketGroupProps) {
  return (
    <Disclosure defaultOpen>
      <Disclosure.Button className='w-full'>
        {({ open }) => (
          <Card className={clsx('flex items-center gap-5 justify-between pr-5', className)} {...props}>
            <div className='flex gap-5 items-center'>
              <Image
                src={groupedItem.experience.bannerImage}
                alt={groupedItem.experience.name}
                width={300}
                height={200}
                className='w-32 h-20 object-cover object-center'
              />
              <div className='text-left'>
                <h3 className='text-xl font-bold'>{groupedItem.experience.name}</h3>
                <p className='text-gray-500'>{groupedItem.experience.description}</p>
              </div>
            </div>
            <Button variant='subtle' iconBefore={open ? TbChevronUp : TbChevronDown} />
          </Card>
        )}
      </Disclosure.Button>
      <Disclosure.Panel>
        {groupedItem.ticketGroups.map((ticket) => (
          <CartTicketItem
            key={ticket.ticket.id}
            ticket={ticket.ticket}
            count={ticket.count}
            onCountChange={onCountChange}
          />
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}
