import { apiService } from '@/services/api.service';

export default async function Home() {
  const experiences = await apiService.experienceControllerGetExperiences();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold'>Ticketpond</h1>
      {experiences.data?.map((experience) => (
        <div key={experience.id}>
          <h2>{experience.name}</h2>
          <p>{experience.description}</p>
        </div>
      ))}
    </main>
  );
}
