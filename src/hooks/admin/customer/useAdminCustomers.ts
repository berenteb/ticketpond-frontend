import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminCustomers() {
  return useSWR('useAdminCustomers', async () => {
    const response = await authenticatedApiService.customerAdminControllerGetCustomers();
    return response.data;
  });
}
