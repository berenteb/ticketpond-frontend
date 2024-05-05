import { paymentApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function usePaymentIntent(id: string | undefined) {
  return useSWR(['usePaymentIntent', id], async () => {
    if (!id) return undefined;
    const response = await paymentApi.paymentControllerCreatePaymentIntent(id);
    return response.data;
  });
}
