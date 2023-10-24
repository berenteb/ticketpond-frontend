import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminMerchant(id: string) {
  return useSWR(['useAdminMerchant', id], async () => {
    const response = await authenticatedApiService.merchantAdminControllerGetMerchant(id);
    return response.data;
  });
}
