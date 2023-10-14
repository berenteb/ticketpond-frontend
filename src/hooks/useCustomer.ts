import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useCustomer(id: string) {
  return useSWR(['customer', id], async () => {
    const response = await authenticatedApiService.customerControllerGetCustomer(id);
    return response.data;
  });
}
