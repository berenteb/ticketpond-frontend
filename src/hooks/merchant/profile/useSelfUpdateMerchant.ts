import { UpdateMerchantDto } from '@/api';
import { merchantSelfApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useSelfUpdateMerchant() {
  return useSWRMutation(['useSelfUpdateMerchant'], async (_: string[], { arg }: { arg: UpdateMerchantDto }) => {
    const response = await merchantSelfApi.merchantSelfControllerUpdateMerchantMe(arg);
    return response.data;
  });
}
