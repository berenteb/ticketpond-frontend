import { orderMerchantApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantOrder(id: string) {
  return useSWR(['useMerchantOrder', id], async () => {
    const response = await orderMerchantApi.orderMerchantControllerGetOrder(id);
    return response.data;
  });
}
