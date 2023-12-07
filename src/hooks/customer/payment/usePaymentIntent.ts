import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function usePaymentIntent(id: string | undefined) {
  return useSWR(['usePaymentIntent', id], async () => {
    if (!id) return undefined;
    const response = await authenticatedApiService.paymentControllerCreatePaymentIntent(id);
    return response.data;
  });
}
