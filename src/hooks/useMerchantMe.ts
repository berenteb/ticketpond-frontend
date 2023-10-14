import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantMe() {
  return useSWR('merchantMe', async () => {
    const response = await authenticatedApiService.merchantControllerGetMe();
    return response.data;
  });
}
