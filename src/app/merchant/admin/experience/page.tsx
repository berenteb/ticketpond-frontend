'use client';

import { Button } from '@/components/button/Button';
import { ExperienceListItem } from '@/components/experience-list-item/ExperienceListItem';
import { useExperiencesForMerchant } from '@/hooks/useExperiencesForMerchant';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default withPageAuthRequired(function MerchantExperienceList() {
  const { data } = useExperiencesForMerchant();
  if (!data)
    return (
      <>
        <h2>Élmények</h2>
        <p>Betöltés...</p>
      </>
    );
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2>Élmények</h2>
        <Link href={`/merchant/admin/experience/create`}>
          <Button>Új élmény</Button>
        </Link>
      </div>
      <ul className='flex flex-col gap-5'>
        {data.map((experience) => (
          <li key={experience.id}>
            <ExperienceListItem experience={experience} href={`/merchant/admin/experience/${experience.id}`} />
          </li>
        ))}
        {data.length === 0 && <p>Nincs még élményed.</p>}
      </ul>
    </>
  );
});
