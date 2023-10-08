import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useOrders() {
  return useSWR('orders', async () => {
    const response = await authenticatedApiService.orderControllerGetOrdersByUser();
    return response.data;
  });
}
