import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminMerchants() {
  return useSWR('useAdminMerchants', async () => {
    const response = await authenticatedApiService.merchantAdminControllerGetMerchants();
    return response.data;
  });
}
