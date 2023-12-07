import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantOrders() {
  return useSWR('useMerchantOrders', async () => {
    const response = await authenticatedApiService.orderMerchantControllerGetOrders();
    return response.data;
  });
}
