import { UpdateMerchantDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateMerchant(id: string) {
  return useSWRMutation(['useAdminUpdateMerchant', id], async (_: string[], { arg }: { arg: UpdateMerchantDto }) => {
    const response = await authenticatedApiService.merchantAdminControllerUpdateMerchant(id, arg);
    return response.data;
  });
}
