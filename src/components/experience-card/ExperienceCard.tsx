import { ExperienceDto } from '@/api';
import { Card } from '@/components/card/Card';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  experience: ExperienceDto;
}

export function ExperienceCard({ experience, ...props }: ExperienceCardProps) {
  return (
    <Link href={`/experience/${experience.id}`}>
      <Card className='cursor-pointer hover:scale-105 transition-transform' {...props}>
        <Image
          src={experience.bannerImage}
          alt={experience.name}
          width={300}
          height={200}
          className='w-full h-32 object-cover object-center'
        />
        <div className='flex flex-col p-5'>
          <h3 className='text-xl font-bold'>{experience.name}</h3>
          <p className='text-gray-500 truncate'>{experience.description}</p>
        </div>
      </Card>
    </Link>
  );
}
