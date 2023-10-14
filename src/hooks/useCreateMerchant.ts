import { CreateMerchantDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCreateMerchant() {
  return useSWRMutation('createMerchant', async (_: string, { arg }: { arg: CreateMerchantDto }) => {
    const response = await authenticatedApiService.merchantControllerCreateMerchant(arg);
    return response.data;
  });
}
