import { cartApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useCart() {
  return useSWR('useCart', async () => {
    const response = await cartApi.cartControllerGetCartForMe();
    return response.data;
  });
}
