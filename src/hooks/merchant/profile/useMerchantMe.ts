import { merchantSelfApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantMe() {
  return useSWR('useMerchantMe', async () => {
    const response = await merchantSelfApi.merchantSelfControllerGetMerchantMe();
    return response.data;
  });
}
