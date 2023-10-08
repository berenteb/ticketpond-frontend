import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useOrder(id: string | undefined) {
  return useSWR(['orderItem', id], async () => {
    if (!id) return undefined;
    const response = await authenticatedApiService.orderControllerGetOrder(id);
    return response.data;
  });
}
