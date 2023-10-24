import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminCustomer(id: string) {
  return useSWR(['useAdminCustomer', id], async () => {
    const response = await authenticatedApiService.customerAdminControllerGetCustomer(id);
    return response.data;
  });
}
