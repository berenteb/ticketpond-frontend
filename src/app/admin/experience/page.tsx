'use client';

import { ExperienceListItem } from '@/components/experience-list-item/ExperienceListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useAdminExperiences } from '@/hooks/admin/experience/useAdminExperiences';
import { setBannerImages } from '@/utils/image.utils';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function AdminExperienceList() {
  const { data, isLoading } = useAdminExperiences();
  const experiences = data ? setBannerImages(data) : undefined;
  return (
    <>
      <h2>Élmények</h2>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {experiences?.map((experience) => (
          <li key={experience.id}>
            <ExperienceListItem experience={experience} href={`/admin/experience/${experience.id}`} />
          </li>
        ))}
      </ul>
    </>
  );
});
