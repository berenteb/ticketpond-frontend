import { UpdateMerchantDto } from '@/api';
import { merchantAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateMerchant(id: string) {
  return useSWRMutation(['useAdminUpdateMerchant', id], async (_: string[], { arg }: { arg: UpdateMerchantDto }) => {
    const response = await merchantAdminApi.merchantAdminControllerUpdateMerchant(id, arg);
    return response.data;
  });
}
