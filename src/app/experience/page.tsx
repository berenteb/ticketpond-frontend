import { ExperienceCard } from '@/components/experience-card/ExperienceCard';
import { publicApiService } from '@/services/publicApiService';
import { getSuffixedTitle } from '@/utils/common.utils';
import { setBannerImages } from '@/utils/image.utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: getSuffixedTitle('Élmények'),
  description: 'Következő éményed itt vár!',
};

export default async function ExperiencesPage() {
  const experiences = await publicApiService.experienceControllerGetExperiences();
  const experiencesWithImages = setBannerImages(experiences.data);
  return (
    <main>
      <h1>Élmények</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
        {experiencesWithImages.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </main>
  );
}
