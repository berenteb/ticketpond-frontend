import { Button } from '@/components/button/Button';
import { TextLink } from '@/components/text-Link/TextLink';
import { useHandlePayment } from '@/hooks/customer/payment/useHandlePayment';
import { useStripeIntent } from '@/hooks/customer/payment/useStripeIntent';
import { PaymentElement } from '@stripe/react-stripe-js';
import { FormEventHandler } from 'react';

interface CheckoutFormProps {
  clientSecret: string;
  orderId: string;
}

export function CheckoutForm({ clientSecret, orderId }: CheckoutFormProps) {
  const payment = useHandlePayment(orderId);
  const stripeIntent = useStripeIntent(clientSecret);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    await payment.handle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {stripeIntent.message && <p className='text-red-500 my-5'>{stripeIntent.message}</p>}
      {payment.message && <p className='text-red-500 my-5'>{payment.message}</p>}
      <p className='mt-10 text-right'>
        A fizetéseket a <TextLink href='https://stripe.com'>Stripe</TextLink> kezeli.
      </p>
      <Button className='mt-3' isLoading={payment.isLoading}>
        Fizetés
      </Button>
    </form>
  );
}
