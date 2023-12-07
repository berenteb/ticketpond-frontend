import { ExperienceDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { TbChevronRight } from 'react-icons/tb';

interface ExperienceListItemProps extends HTMLAttributes<HTMLDivElement> {
  experience: ExperienceDto;
  href: string;
}

export function ExperienceListItem({ experience, className, href, ...props }: ExperienceListItemProps) {
  return (
    <Link href={href}>
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
            <p className='text-gray-500'>{experience.description}</p>
          </div>
        </div>
        <Button variant='subtle' iconBefore={TbChevronRight} />
      </Card>
    </Link>
  );
}
