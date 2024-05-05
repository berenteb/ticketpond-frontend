import { customerAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminCustomers() {
  return useSWR('useAdminCustomers', async () => {
    const response = await customerAdminApi.customerAdminControllerGetCustomers();
    return response.data;
  });
}
