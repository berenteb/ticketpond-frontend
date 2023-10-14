import { UpdateMerchantDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useUpdateMerchant(id: string) {
  return useSWRMutation(['updateMerchant', id], async (_: string[], { arg }: { arg: UpdateMerchantDto }) => {
    const response = await authenticatedApiService.merchantControllerUpdateMerchant(id, arg);
    return response.data;
  });
}
