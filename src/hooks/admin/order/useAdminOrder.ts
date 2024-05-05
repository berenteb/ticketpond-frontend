import { orderAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminOrder(id: string | undefined) {
  return useSWR(['useAdminOrder', id], async () => {
    if (!id) return undefined;
    const response = await orderAdminApi.orderAdminControllerGetOrder(id);
    return response.data;
  });
}
