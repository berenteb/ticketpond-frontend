'use client';

import { UpdateMerchantDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import { useMerchant } from '@/hooks/useMerchant';
import { useUpdateMerchant } from '@/hooks/useUpdateMerchant';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<UpdateMerchantDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  email: yup.string().email('Nem jó formátum').required('Az e-mail cím megadása kötelező!'),
  phone: yup.string().required('A telefonszám megadása kötelező!'),
  address: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function AdminMerchantPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data } = useMerchant(id);
  const updateMerchant = useUpdateMerchant(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateMerchantDto>({ resolver: yupResolver(schema) });
  const onSubmit = (data: UpdateMerchantDto) => {
    updateMerchant.trigger(data).then(() => router.push('/admin/merchant'));
  };
  useEffect(() => {
    if (!data) return;
    reset(data);
  }, [data]);
  return (
    <main>
      <h1>Kereskedő szerkesztése</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Kereskedő neve'
          placeholder='ABC Rendező Kft'
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label='Leírás'
          placeholder='Az ABC Rendező Kft egy profi ...'
          error={errors.description?.message}
          {...register('description')}
        />
        <Input label='E-mail cím' placeholder='nev@pelda.hu' error={errors.email?.message} {...register('email')} />
        <Input label='Telefonszám' placeholder='+36123456789' error={errors.phone?.message} {...register('phone')} />
        <Input
          label='Székhely címe'
          placeholder='1111, Budapest, Példa utca 1.'
          error={errors.address?.message}
          {...register('address')}
        />
        <Button className='mt-5' type='submit' isLoading={updateMerchant.isMutating}>
          Mentés
        </Button>
      </form>
    </main>
  );
});
