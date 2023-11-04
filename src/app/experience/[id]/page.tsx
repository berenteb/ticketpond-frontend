import { TextLink } from '@/components/text-Link/TextLink';
import { TicketCard } from '@/components/ticket-card/TicketCard';
import { publicApiService } from '@/services/publicApiService';
import { setBannerImage } from '@/utils/image.utils';
import Image from 'next/image';
import { cache } from 'react';

export default async function ExperienceDetailsPage({ params }: { params: { id: string } }) {
  const experienceRaw = await getExperienceById(params.id);
  const experience = setBannerImage(experienceRaw);
  if (!experience) return null;
  return (
    <main>
      <Image
        className='w-full h-72 object-cover object-center rounded-xl shadow-2xl'
        src={experience.bannerImage}
        alt={experience.name}
        width={1440}
        height={400}
      />
      <h1 className='text-5xl'>{experience.name}</h1>
      <p className='body-paragraph'>{experience.description}</p>
      {experience.tickets.map((ticket) => (
        <TicketCard ticket={ticket} key={ticket.id} />
      ))}
      <p className='body-paragraph'>
        Szervezi a(z) <TextLink href={`/merchant/${experience.merchant.id}`}>{experience.merchant.name}</TextLink>
      </p>
    </main>
  );
}

const getExperienceById = cache(async (id: string) => {
  const res = await publicApiService.experienceControllerGetExperienceById(id);
  return res.data;
});
