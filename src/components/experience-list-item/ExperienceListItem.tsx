import { ExperienceDto } from '@/api';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface ExperienceListItemProps extends HTMLAttributes<HTMLDivElement> {
  experience: ExperienceDto;
}

export function ExperienceListItem({ experience, className, ...props }: ExperienceListItemProps) {
  return (
    <Link href={`/admin/experience/${experience.id}`}>
      <Card className={clsx('flex items-center gap-5 justify-between p-5', className)} {...props}>
        <h3 className='text-xl font-bold'>{experience.name}</h3>
        <span className='text-gray-500'>
          <TbChevronRight size={30} />
        </span>
      </Card>
    </Link>
  );
}
