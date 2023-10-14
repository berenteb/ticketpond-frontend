import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchants() {
  return useSWR('merchants', async () => {
    const response = await authenticatedApiService.merchantControllerGetMerchants();
    return response.data;
  });
}
