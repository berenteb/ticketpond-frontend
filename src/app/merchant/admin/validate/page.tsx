'use client';

import { ExperienceListItem } from '@/components/experience-list-item/ExperienceListItem';
import { Spinner } from '@/components/spinner/Spinner';
import { useMerchantExperiences } from '@/hooks/merchant/experience/useMerchantExperiences';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MerchantExperienceList() {
  const { data, isLoading } = useMerchantExperiences();
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2>Érvényesítés</h2>
      </div>
      <p>Válaszd ki, hogy melyik élményhez szeretnél jegyet érvényesíteni!</p>
      {isLoading && <Spinner />}
      <ul className='flex flex-col gap-5'>
        {data?.map((experience) => (
          <li key={experience.id}>
            <ExperienceListItem experience={experience} href={`/merchant/admin/validate/${experience.id}`} />
          </li>
        ))}
        {data?.length === 0 && <p>Nincs még élményed.</p>}
      </ul>
    </>
  );
});
