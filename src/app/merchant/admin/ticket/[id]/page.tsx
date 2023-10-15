'use client';

import { UpdateTicketDto } from '@/api';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/form/input/Input';
import { useTicket } from '@/hooks/useTicket';
import { useUpdateTicket } from '@/hooks/useUpdateTicket';
import { formatDateHu } from '@/utils/common.utils';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

const schema: ObjectSchema<UpdateTicketDto> = yup.object().shape({
  name: yup.string().required('A név megadása kötelező!'),
  description: yup.string().required('A leírás megadása kötelező!'),
  price: yup.number().required('Az ár megadása kötelező!'),
  validFrom: yup.string().required('A kezdő dátum megadása kötelező!'),
  validTo: yup.string().required('A befejező dátum megadása kötelező!'),
});

export default withPageAuthRequired(function AdminTicketPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const ticket = useTicket(id);
  const updateTicket = useUpdateTicket(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateTicketDto>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UpdateTicketDto) => {
    if (data.validFrom) data.validFrom = new Date(data.validFrom).toISOString();
    if (data.validTo) data.validTo = new Date(data.validTo).toISOString();
    const { name, description, price, validFrom, validTo } = data;
    updateTicket
      .trigger({ name, description, price, validFrom, validTo })
      .then(() => router.push('/merchant/admin/ticket'));
  };

  useEffect(() => {
    if (!ticket.data) return;
    reset({
      ...ticket.data,
      validFrom: formatDateHu(new Date(ticket.data.validFrom)),
      validTo: formatDateHu(new Date(ticket.data.validTo)),
    });
  }, [ticket.data]);

  return (
    <>
      <h2>Jegy szerkesztése</h2>
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
        <Button className='mt-5' type='submit' isLoading={updateTicket.isMutating}>
          Mentés
        </Button>
      </form>
    </>
  );
});
