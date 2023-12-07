'use client';

import { Button } from '@/components/button/Button';
import { ValidationResult } from '@/components/validation-result/ValidationResult';
import { useMerchantExperience } from '@/hooks/merchant/experience/useMerchantExperience';
import { useValidateTicket } from '@/hooks/merchant/experience/useValidateTicket';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useParams, useRouter } from 'next/navigation';
import { QrReader } from '@/components/qr-reader/QrReader';

export default withPageAuthRequired(function MerchantExperienceValidatePage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const experience = useMerchantExperience(id);
  const validate = useValidateTicket(id);
  const onResult = (result: string) => {
    const ticketSerialNumber = result;
    if (!ticketSerialNumber) return;
    validate.trigger({ ticketSerialNumber });
  };
  const onContinue = () => {
    validate.reset();
  };
  return (
    <>
      <h2>Beolvasás - {experience.data?.name}</h2>
      <div className='flex flex-col gap-5 items-center'>
        {validate.data ? (
          <ValidationResult responseData={validate.data} onContinue={onContinue} />
        ) : (
          <QrReader onScan={onResult} />
        )}
        <Button variant='secondary' onClick={() => router.push('/merchant/admin')}>
          Kilépés
        </Button>
      </div>
    </>
  );
});
