'use client';

import { CreateCustomerDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/form/input/Input';
import { Title } from '@/components/title/Title';
import { useCreateCustomer } from '@/hooks/customer/profile/useCreateCustomer';
import { useMe } from '@/hooks/customer/profile/useMe';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';
import * as yup from 'yup';

const schema: ObjectSchema<CreateCustomerDto> = yup.object().shape({
  firstName: yup.string().required('A keresztnév megadása kötelező!'),
  lastName: yup.string().required('A vezetéknév megadása kötelező!'),
  email: yup.string().email('Nem jó formátum').required('Az e-mail cím megadása kötelező!'),
  phone: yup.string().required('A telefonszám megadása kötelező!'),
  address: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function CreateProfilePage() {
  const createCustomer = useCreateCustomer();
  const me = useMe();
  const user = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCustomerDto>({ resolver: yupResolver(schema) });
  const onSubmit = (data: CreateCustomerDto) => {
    createCustomer.trigger(data).then(() => router.push('/profile'));
  };
  useEffect(() => {
    if (!user.isLoading) {
      reset({
        email: user.user?.email ?? '',
        firstName: String(user.user?.given_name ?? ''),
        lastName: String(user.user?.family_name ?? ''),
      });
    }
  }, [user.user]);
  if (me.data) router.push('/profile');
  return (
    <main>
      <Title>Fiók létrehozása</Title>
      <h1>Fiók létrehozása</h1>
      <p>Üdvözöllek a Ticketpondon! A következő lépésekkel tudsz fiókot létrehozni:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='Vezetéknév' placeholder='Példa' error={errors.lastName?.message} {...register('lastName')} />
        <Input label='Keresztnév' placeholder='Béla' error={errors.firstName?.message} {...register('firstName')} />
        <Input label='E-mail cím' placeholder='nev@pelda.hu' error={errors.email?.message} {...register('email')} />
        <Input label='Telefonszám' placeholder='+36123456789' error={errors.phone?.message} {...register('phone')} />
        <Input
          label='Lakcím'
          placeholder='1111, Budapest, Példa utca 1.'
          error={errors.address?.message}
          {...register('address')}
        />
        <Button className='mt-5' type='submit' isLoading={createCustomer.isMutating}>
          Létrehozom!
        </Button>
      </form>
    </main>
  );
});
