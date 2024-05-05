import { CreateMerchantDto } from '@/api';
import { authenticatedMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useRegisterMerchant() {
  return useSWRMutation('useRegisterMerchant', async (_: string, { arg }: { arg: CreateMerchantDto }) => {
    const response = await authenticatedMerchantApi.merchantControllerRegisterMerchant(arg);
    return response.data;
  });
}
