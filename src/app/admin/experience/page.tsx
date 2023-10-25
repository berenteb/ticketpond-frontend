'use client';

import { ExperienceListItem } from '@/components/experience-list-item/ExperienceListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useAdminExperiences } from '@/hooks/admin/experience/useAdminExperiences';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminExperienceList() {
  const { data, isLoading } = useAdminExperiences();
  return (
    <>
      <h2>Élmények</h2>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((experience) => (
          <li key={experience.id}>
            <ExperienceListItem experience={experience} href={`/admin/experience/${experience.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
