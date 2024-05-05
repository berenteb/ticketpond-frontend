import { cartApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useCheckout() {
  return useSWRMutation('useCheckout', async () => {
    const response = await cartApi.cartControllerCheckoutForMe();
    return response.data;
  });
}
