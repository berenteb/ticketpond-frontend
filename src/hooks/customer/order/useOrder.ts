import { orderApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useOrder(id: string | undefined) {
  return useSWR(['useOrder', id], async () => {
    if (!id) return undefined;
    const response = await orderApi.orderControllerGetOrder(id);
    return response.data;
  });
}
