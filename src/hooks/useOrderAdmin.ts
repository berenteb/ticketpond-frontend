import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useOrderAdmin(id: string | undefined) {
  return useSWR(['orderItemAdmin', id], async () => {
    if (!id) return undefined;
    const response = await authenticatedApiService.orderAdminControllerGetOrder(id);
    return response.data;
  });
}
