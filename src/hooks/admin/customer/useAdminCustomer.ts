import { customerAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminCustomer(id: string) {
  return useSWR(['useAdminCustomer', id], async () => {
    const response = await customerAdminApi.customerAdminControllerGetCustomerById(id);
    return response.data;
  });
}
