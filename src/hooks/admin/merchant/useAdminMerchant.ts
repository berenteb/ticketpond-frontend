import { merchantAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminMerchant(id: string) {
  return useSWR(['useAdminMerchant', id], async () => {
    const response = await merchantAdminApi.merchantAdminControllerGetMerchant(id);
    return response.data;
  });
}
