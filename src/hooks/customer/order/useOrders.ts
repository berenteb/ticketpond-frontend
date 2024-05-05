import { orderApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useOrders() {
  return useSWR('useOrders', async () => {
    const response = await orderApi.orderControllerGetOrdersByUser();
    return response.data;
  });
}
