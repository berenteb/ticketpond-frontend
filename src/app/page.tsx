import { ExperienceCard } from '@/components/experience-card/ExperienceCard';
import { publicApiService } from '@/services/publicApiService';

export default async function Home() {
  const experiences = await publicApiService.experienceControllerGetExperiences();
  return (
    <main>
      <h1 className='text-5xl font-bold text-slate-300'>A következő élményed itt vár.</h1>
      <div className='grid grid-cols-3 gap-4 mt-10'>
        {experiences.data.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </main>
  );
}
