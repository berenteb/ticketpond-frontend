'use client';

import { UpdateExperienceDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/form/input/Input';
import { useExperience } from '@/hooks/useExperience';
import { useUpdateExperience } from '@/hooks/useUpdateExperience';
import { formatDateHu } from '@/utils/common.utils';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<UpdateExperienceDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  bannerImage: yup.string().url('Nem jó formátum').required('Az borítókép címének cím megadása kötelező!'),
  startDate: yup.string().required('A telefonszám megadása kötelező!'),
  endDate: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function AdminExperiencePage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const experience = useExperience(id);
  const updateExperience = useUpdateExperience(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateExperienceDto>({ resolver: yupResolver(schema) });
  const onSubmit = (data: UpdateExperienceDto) => {
    if (data.startDate) data.startDate = new Date(data.startDate).toISOString();
    if (data.endDate) data.endDate = new Date(data.endDate).toISOString();
    const { name, description, bannerImage, startDate, endDate } = data;
    updateExperience
      .trigger({ name, description, bannerImage, endDate, startDate })
      .then(() => router.push('/admin/experience'));
  };
  useEffect(() => {
    if (!experience.data) return;
    reset({
      ...experience.data,
      startDate: formatDateHu(new Date(experience.data.startDate)),
      endDate: formatDateHu(new Date(experience.data.endDate)),
    });
  }, [experience.data]);

  return (
    <>
      <h2>Élmény szerkesztése</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='Élmény neve' placeholder='Fesztivál' error={errors.name?.message} {...register('name')} />
        <Input label='Leírás' placeholder='Jó lesz' error={errors.description?.message} {...register('description')} />
        <Input
          label='Borítókép'
          placeholder='https://images.unsplash.com'
          error={errors.bannerImage?.message}
          {...register('bannerImage')}
        />
        <Input
          type='datetime-local'
          label='Élmény kezdetének dátuma'
          error={errors.startDate?.message}
          {...register('startDate')}
        />
        <Input
          type='datetime-local'
          label='Élmény végének dátuma'
          error={errors.startDate?.message}
          {...register('endDate')}
        />
        <Button className='mt-5' type='submit' isLoading={updateExperience.isMutating}>
          Mentés
        </Button>
      </form>
    </>
  );
});
