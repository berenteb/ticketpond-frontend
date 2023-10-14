import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useCustomers() {
  return useSWR('customers', async () => {
    const response = await authenticatedApiService.customerControllerGetCustomers();
    return response.data;
  });
}
