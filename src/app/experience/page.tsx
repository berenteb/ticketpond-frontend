import { ExperienceCard } from '@/components/experience-card/ExperienceCard';
import { publicApiService } from '@/services/publicApiService';

export default async function ExperiencesPage() {
  const experiences = await publicApiService.experienceControllerGetExperiences();
  return (
    <main>
      <h1>Élmények</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
        {experiences.data.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </main>
  );
}
