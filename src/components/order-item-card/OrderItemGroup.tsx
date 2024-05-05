import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { OrderItemDisplay } from '@/components/order-item-card/OrderItemDisplay';
import { setBannerImage } from '@/utils/image.utils';
import { GroupedItems } from '@/utils/order.utils';
import { Disclosure } from '@headlessui/react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';

interface OrderItemGroupProps extends HTMLAttributes<HTMLDivElement> {
  groupedItems: GroupedItems;
  isPaid?: boolean;
}

export function OrderItemGroup({ groupedItems, isPaid, className, ...props }: OrderItemGroupProps) {
  const experience = setBannerImage(groupedItems.experience);
  return (
    <Disclosure defaultOpen>
      <Disclosure.Button className='w-full'>
        {({ open }) => (
          <Card className={clsx('flex items-center gap-5 justify-between pr-5', className)} {...props}>
            <div className='flex gap-5 items-center'>
              <Image
                src={experience.bannerImage}
                alt={experience.name}
                width={300}
                height={200}
                className='w-32 h-20 object-cover object-center'
              />
              <div className='text-left'>
                <h3 className='text-xl font-bold'>{experience.name}</h3>
                <p className='text-gray-500 truncate'>{experience.description}</p>
              </div>
            </div>
            <Button variant='subtle' iconBefore={open ? TbChevronUp : TbChevronDown} />
          </Card>
        )}
      </Disclosure.Button>
      <Disclosure.Panel>
        {groupedItems.items.map((item) => (
          <OrderItemDisplay key={item.id} item={item} isPaid={isPaid} />
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}
