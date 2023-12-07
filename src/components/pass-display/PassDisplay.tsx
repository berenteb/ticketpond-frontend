import { OrderItemDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Popover } from '@headlessui/react';
import { TbChevronDown, TbQrcode } from 'react-icons/tb';

interface PassDisplayProps {
  orderItem: OrderItemDto;
}

const classNames = 'w-full border-t-2 border-slate-50 p-3 hover:bg-slate-50 text-center';

export function PassDisplay({ orderItem }: PassDisplayProps) {
  return (
    <Popover className='relative'>
      <Popover.Button>
        <Button variant='subtle' className='px-4' iconBefore={TbQrcode} iconAfter={TbChevronDown}>
          <span className='hidden sm:block'>Belépők</span>
        </Button>
      </Popover.Button>
      <Popover.Panel className='absolute w-40 flex flex-col bg-white rounded shadow-md z-10'>
        <a
          className={classNames}
          href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/cdn/passes/apple/${orderItem.id}.pkpass`}
        >
          Apple Wallet
        </a>
        <a
          className={classNames}
          target='_blank'
          href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/pass/qr/${orderItem.serialNumber}`}
        >
          QR kód
        </a>
      </Popover.Panel>
    </Popover>
  );
}
