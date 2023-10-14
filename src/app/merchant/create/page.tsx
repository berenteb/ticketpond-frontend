'use client';

import { CreateMerchantDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import { useMerchantMe } from '@/hooks/useMerchantMe';
import { useRegisterMerchant } from '@/hooks/useRegisterMerchant';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<CreateMerchantDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  email: yup.string().email('Nem jó formátum').required('Az e-mail cím megadása kötelező!'),
  phone: yup.string().required('A telefonszám megadása kötelező!'),
  address: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function CreateMerchantPage() {
  const me = useMerchantMe();
  const registerMerchant = useRegisterMerchant();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMerchantDto>({ resolver: yupResolver(schema) });
  const onSubmit = (data: CreateMerchantDto) => {
    registerMerchant.trigger(data).then(() => router.push('/merchant/profile'));
  };
  useEffect(() => {
    if (registerMerchant.data) {
      router.push('/profile');
    }
  }, [registerMerchant.data]);
  if (me.data) router.push('/merchant/profile');
  return (
    <main>
      <h1>Kereskedő létrehozása</h1>
      <p>Üdvözöllek a Ticketpondon! A következő lépésekkel tudsz kereskedőt létrehozni:</p>
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
        <Button className='mt-5' type='submit' isLoading={registerMerchant.isMutating}>
          Létrehozom!
        </Button>
      </form>
    </main>
  );
});
