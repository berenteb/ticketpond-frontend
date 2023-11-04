'use client';

import { CreateExperienceDto } from '@/api';
import { Button } from '@/components/button/Button';
import { FileInputField } from '@/components/form/file-input/FileInput';
import { Input } from '@/components/form/input/Input';
import { useCreateExperience } from '@/hooks/merchant/experience/useCreateExperience';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<CreateExperienceDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  bannerImage: yup.string().required('Az borítókép feltöltése kötelező!'),
  startDate: yup.string().required('A telefonszám megadása kötelező!'),
  endDate: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function MerchantExperienceCreatePage() {
  const router = useRouter();
  const createExperience = useCreateExperience();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateExperienceDto>({ resolver: yupResolver(schema) });

  const onSubmit = (data: CreateExperienceDto) => {
    if (data.startDate) data.startDate = new Date(data.startDate).toISOString();
    if (data.endDate) data.endDate = new Date(data.endDate).toISOString();
    const { name, description, bannerImage, startDate, endDate } = data;
    createExperience
      .trigger({ name, description, bannerImage, endDate, startDate })
      .then(() => router.push('/merchant/admin/experience'));
  };

  return (
    <>
      <h2>Élmény hozzáadása</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='Élmény neve' placeholder='Fesztivál' error={errors.name?.message} {...register('name')} />
        <Input label='Leírás' placeholder='Jó lesz' error={errors.description?.message} {...register('description')} />
        <FileInputField
          label='Borítókép'
          accept='image/png'
          error={errors.bannerImage?.message}
          control={control}
          name='bannerImage'
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
        <Button className='mt-5' type='submit' isLoading={createExperience.isMutating}>
          Létrehozás
        </Button>
      </form>
    </>
  );
});
