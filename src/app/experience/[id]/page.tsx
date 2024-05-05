import { TextLink } from '@/components/text-Link/TextLink';
import { TicketCard } from '@/components/ticket-card/TicketCard';
import { experienceApi } from '@/services/public-api.service';
import { getSuffixedTitle } from '@/utils/common.utils';
import { setBannerImage } from '@/utils/image.utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { cache } from 'react';

interface ExperienceDetailsPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ExperienceDetailsPageProps): Promise<Metadata> {
  const experienceRaw = await getExperienceById(params.id);
  const experience = setBannerImage(experienceRaw);

  return {
    title: getSuffixedTitle(experience.name),
    description: experience.description,
    openGraph: {
      images: [experience.bannerImage],
      description: experience.description,
      title: getSuffixedTitle(experience.name),
    },
  };
}

export default async function ExperienceDetailsPage({ params }: ExperienceDetailsPageProps) {
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
  const res = await experienceApi.experienceControllerGetExperienceById(id);
  return res.data;
});
