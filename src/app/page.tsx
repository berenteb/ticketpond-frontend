import { ExperienceCard } from '@/components/experience-card/ExperienceCard';
import { publicApiService } from '@/services/publicApiService';
import { setBannerImages } from '@/utils/image.utils';

export default async function Home() {
  const experiences = await publicApiService.experienceControllerGetExperiences();
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
