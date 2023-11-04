import { TextLink } from '@/components/text-Link/TextLink';
import { Menu } from '@headlessui/react';
import { TbChevronDown } from 'react-icons/tb';

interface DropdownMenuProps {
  title: string;
  items: { title: string; href: string }[];
}

export function DropdownMenu({ title, items }: DropdownMenuProps) {
  return (
    <div className='relative'>
      <Menu>
        <Menu.Button className='text-lg flex items-center gap-2'>
          {title} <TbChevronDown />
        </Menu.Button>
        <Menu.Items className='absolute left-0 top-full bg-white shadow-lg rounded-md flex flex-col p-5 gap-3 z-10'>
          {items.map((item, index) => (
            <Menu.Item key={index}>
              <TextLink className='text-lg' href={item.href}>
                {item.title}
              </TextLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
