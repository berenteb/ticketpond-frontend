import { ExperienceCard } from '@/components/experience-card/ExperienceCard';
import { experienceApi } from '@/services/public-api.service';
import { getSuffixedTitle } from '@/utils/common.utils';
import { setBannerImages } from '@/utils/image.utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: getSuffixedTitle('Kezdőlap'),
  description: 'Ahol az élmények kezdődnek.',
};

export default async function Home() {
  const experiences = await experienceApi.experienceControllerGetExperiences();
  const experiencesWithImages = setBannerImages(experiences.data);
  return (
    <main>
      <h1 className='text-5xl font-bold text-slate-300'>A következő élményed itt vár.</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
        {experiencesWithImages.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </main>
  );
}
