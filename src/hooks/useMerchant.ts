import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchant(id: string) {
  return useSWR(['merchant', id], async () => {
    const response = await authenticatedApiService.merchantControllerGetMerchant(id);
    return response.data;
  });
}
