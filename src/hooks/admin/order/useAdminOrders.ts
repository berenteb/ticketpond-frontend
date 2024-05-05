import { orderAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminOrders() {
  return useSWR('useAdminOrders', async () => {
    const response = await orderAdminApi.orderAdminControllerGetOrders();
    return response.data;
  });
}
