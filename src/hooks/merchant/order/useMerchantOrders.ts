import { orderMerchantApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantOrders() {
  return useSWR('useMerchantOrders', async () => {
    const response = await orderMerchantApi.orderMerchantControllerGetOrders();
    return response.data;
  });
}
