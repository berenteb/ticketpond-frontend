import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminOrder(id: string | undefined) {
  return useSWR(['useAdminOrder', id], async () => {
    if (!id) return undefined;
    const response = await authenticatedApiService.orderAdminControllerGetOrder(id);
    return response.data;
  });
}
