'use client';

import { UpdateCustomerDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import { useCustomer } from '@/hooks/useCustomer';
import { useUpdateCustomer } from '@/hooks/useUpdateCustomer';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<UpdateCustomerDto> = yup.object().shape({
  firstName: yup.string().required('A keresztnév megadása kötelező!'),
  lastName: yup.string().required('A vezetéknév megadása kötelező!'),
  email: yup.string().email('Nem jó formátum').required('Az e-mail cím megadása kötelező!'),
  phone: yup.string().required('A telefonszám megadása kötelező!'),
  address: yup.string().required('A lakcím megadása kötelező!'),
});

export default withPageAuthRequired(function AdminCustomerPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const customer = useCustomer(id);
  const updateCustomer = useUpdateCustomer(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateCustomerDto>({ resolver: yupResolver(schema) });
  const onSubmit = (data: UpdateCustomerDto) => {
    updateCustomer.trigger(data).then(() => router.push('/admin/customer'));
  };
  useEffect(() => {
    if (!customer.data) return;
    reset(customer.data);
  }, [customer.data]);

  return (
    <>
      <h2>Vásárló szerkesztése</h2>
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
        <Button className='mt-5' type='submit' isLoading={updateCustomer.isMutating}>
          Létrehozom!
        </Button>
      </form>
    </>
  );
});
