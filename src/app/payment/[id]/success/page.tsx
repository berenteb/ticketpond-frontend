'use client';

import { Button } from '@/components/button/Button';
import { Spinner } from '@/components/spinner/Spinner';
import { Title } from '@/components/title/Title';
import { useOrder } from '@/hooks/customer/order/useOrder';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useParams } from 'next/navigation';
import { TbCircleCheckFilled } from 'react-icons/tb';

export default withPageAuthRequired(function PaymentSuccessPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const order = useOrder(id);
  if (order.isLoading)
    return (
      <main>
        <Spinner />
      </main>
    );
  if (!order.data) return null;
  return (
    <main className='flex items-center justify-center flex-1'>
      <Title>Sikeres fizetés</Title>
      <div className='flex flex-col items-center gap-5'>
        <TbCircleCheckFilled size={50} className='text-green-500' />
        <div className='text-center'>
          <h1>Sikeres fizetés</h1>
          <p>{order.data.serialNumber}</p>
        </div>
        <Button as='link' href={`/profile/orders/${order.data.id}`}>
          Rendelés megtekintése
        </Button>
      </div>
    </main>
  );
});
