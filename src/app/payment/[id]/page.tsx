'use client';

import { CheckoutForm } from '@/components/checkout-form/CheckoutForm';
import { usePaymentIntent } from '@/hooks/customer/payment/usePaymentIntent';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default withPageAuthRequired(function PaymentPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const paymentIntent = usePaymentIntent(id);
  if (paymentIntent.isLoading) return null;
  if (paymentIntent.error || !paymentIntent.data)
    return (
      <main>
        <p>{paymentIntent.error.message}</p>
      </main>
    );

  const options: StripeElementsOptions = {
    clientSecret: paymentIntent.data.clientSecret,
  };

  return (
    <main>
      <h1>Rendelés kifizetése</h1>
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm clientSecret={paymentIntent.data.clientSecret} orderId={id} />
      </Elements>
    </main>
  );
});
