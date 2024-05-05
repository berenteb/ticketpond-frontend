import { merchantAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminMerchants() {
  return useSWR('useAdminMerchants', async () => {
    const response = await merchantAdminApi.merchantAdminControllerGetMerchants();
    return response.data;
  });
}
