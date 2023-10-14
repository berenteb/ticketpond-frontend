import { CreateMerchantDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useRegisterMerchant() {
  return useSWRMutation('registerMerchant', async (_: string, { arg }: { arg: CreateMerchantDto }) => {
    const response = await authenticatedApiService.merchantControllerRegisterMerchant(arg);
    return response.data;
  });
}
