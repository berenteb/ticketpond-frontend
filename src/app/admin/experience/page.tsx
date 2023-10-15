'use client';

import { ExperienceListItem } from '@/components/experience-list-item/ExperienceListItem';
import { useExperiences } from '@/hooks/useExperiences';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminExperienceList() {
  const { data } = useExperiences();
  if (!data)
    return (
      <>
        <h2>Élmények</h2>
        <p>Betöltés...</p>
      </>
    );
  return (
    <>
      <h2>Élmények</h2>
      <ul className='flex flex-col gap-5'>
        {data.map((experience) => (
          <li key={experience.id}>
            <ExperienceListItem experience={experience} href={`/admin/experience/${experience.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
