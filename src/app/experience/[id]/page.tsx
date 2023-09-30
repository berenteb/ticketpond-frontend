import { TextLink } from '@/components/text-Link/TextLink';
import { TicketCard } from '@/components/ticket-card/TicketCard';
import { apiService } from '@/services/api.service';
import Image from 'next/image';
import { cache } from 'react';

export default async function ExperienceDetailsPage({ params }: { params: { id: string } }) {
  const experience = await getExperienceById(params.id);
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
      <h1 className='text-5xl font-bold'>{experience.name}</h1>
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
  const res = await apiService.experienceControllerGetExperienceById(id);
  return res.data;
});