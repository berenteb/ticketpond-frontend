import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantOrder(id: string) {
  return useSWR(['useMerchantOrder', id], async () => {
    const response = await authenticatedApiService.orderMerchantControllerGetOrder(id);
    return response.data;
  });
}
