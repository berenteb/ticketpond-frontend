import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantMe() {
  return useSWR('useMerchantMe', async () => {
    const response = await authenticatedApiService.merchantSelfControllerGetMerchantMe();
    return response.data;
  });
}
