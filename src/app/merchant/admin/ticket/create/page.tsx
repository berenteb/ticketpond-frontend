'use client';

import { CreateTicketDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/form/input/Input';
import { Select } from '@/components/form/select/Select';
import { useCreateTicket } from '@/hooks/merchant/ticket/useCreateTicket';
import { useMerchantExperiences } from '@/hooks/merchant/experience/useMerchantExperiences';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<CreateTicketDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  price: yup.number().required('Az ár megadása kötelező!'),
  validFrom: yup.string().required('A kezdő dátum megadása kötelező!'),
  validTo: yup.string().required('A befejező dátum megadása kötelező!'),
  experienceId: yup.string().required('Az élmény megadása kötelező!'),
});

export default withPageAuthRequired(function MerchantTicketCreatePage() {
  const router = useRouter();
  const createTicket = useCreateTicket();
  const experiences = useMerchantExperiences();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicketDto>({ resolver: yupResolver(schema) });

  const onSubmit = (data: CreateTicketDto) => {
    if (data.validFrom) data.validFrom = new Date(data.validFrom).toISOString();
    if (data.validTo) data.validTo = new Date(data.validTo).toISOString();
    const { name, description, price, validFrom, validTo, experienceId } = data;
    createTicket
      .trigger({ name, description, price, validFrom, validTo, experienceId })
      .then(() => router.push('/merchant/admin/ticket'));
  };
  return (
    <>
      <h2>Jegy létrehozása</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='Jegy neve' placeholder='Napi jegy' error={errors.name?.message} {...register('name')} />
        <Input
          label='Leírás'
          placeholder='Információ a jegyről...'
          error={errors.description?.message}
          {...register('description')}
        />
        <Input
          label='Ár'
          placeholder='1234'
          type='number'
          suffix='ft'
          error={errors.price?.message}
          {...register('price')}
        />
        <Input
          type='datetime-local'
          label='Jegy érvényesség kezdetének dátuma'
          error={errors.validFrom?.message}
          {...register('validFrom')}
        />
        <Input
          type='datetime-local'
          label='Jegy érvényesség végének dátuma'
          error={errors.validTo?.message}
          {...register('validTo')}
        />
        <Select label={'Élmény'} error={errors.experienceId?.message} {...register('experienceId')}>
          {experiences.data?.map((experience) => (
            <option key={experience.id} value={experience.id}>
              {experience.name}
            </option>
          ))}
        </Select>
        <Button className='mt-5' type='submit' isLoading={createTicket.isMutating}>
          Létrehozás
        </Button>
      </form>
    </>
  );
});
