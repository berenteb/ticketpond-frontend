import { Card } from '@/components/card/Card';
import { TextLink } from '@/components/text-Link/TextLink';
import { IconType } from 'react-icons';
import { TbBuilding, TbMail, TbPhone } from 'react-icons/tb';

interface DataCardProps {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export function DataCard({ name, phone, address, email }: DataCardProps) {
  return (
    <Card className='flex flex-col gap-5 p-5 w-fit text-slate-800'>
      {name && <h3 className='text-xl font-bold'>{name}</h3>}
      {email && (
        <DataCardItem icon={TbMail}>
          <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </DataCardItem>
      )}
      {phone && (
        <DataCardItem icon={TbPhone}>
          <TextLink href={`tel:${phone}`}>{phone}</TextLink>
        </DataCardItem>
      )}
      {address && (
        <DataCardItem icon={TbBuilding}>
          <TextLink href={`https://www.google.com/maps/search/?api=1&query=${address}`}>{address}</TextLink>
        </DataCardItem>
      )}
    </Card>
  );
}

function DataCardItem({ icon, children }: { icon: IconType; children: React.ReactNode }) {
  const Icon = icon;
  return (
    <div className='flex gap-2'>
      <Icon size={20} />
      <p className='text-slate-800'>{children}</p>
    </div>
  );
}
