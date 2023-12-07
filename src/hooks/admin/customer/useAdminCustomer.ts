import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminCustomer(id: string) {
  return useSWR(['useAdminCustomer', id], async () => {
    const response = await authenticatedApiService.customerAdminControllerGetCustomerByInternalId(id);
    return response.data;
  });
}
