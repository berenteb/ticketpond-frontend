import Link from 'next/link';
import { IconType } from 'react-icons';

interface DashTileProps {
  color: string;
  icon: IconType;
  title: string;
  href: string;
}

export function DashTile({ color, icon, title, href }: DashTileProps) {
  const Icon = icon;
  return (
    <Link href={href}>
      <div className='bg-white shadow-md rounded-xl w-72 max-w-full hover:scale-105 transition-transform'>
        <div className='rounded-t-xl p-5 flex justify-center items-center' style={{ backgroundColor: color + '30' }}>
          <Icon style={{ color }} size={50} />
        </div>
        <h3 className='text-center py-5'>{title}</h3>
      </div>
    </Link>
  );
}
