import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useOrdersForMerchant() {
  return useSWR('ordersForMerchant', async () => {
    const response = await authenticatedApiService.orderAdminControllerGetOrdersByMerchant();
    return response.data;
  });
}
