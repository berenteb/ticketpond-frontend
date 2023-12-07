import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminOrders() {
  return useSWR('useAdminOrders', async () => {
    const response = await authenticatedApiService.orderAdminControllerGetOrders();
    return response.data;
  });
}
