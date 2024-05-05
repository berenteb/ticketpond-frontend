import { RemoveFromCartDto } from '@/api';
import { cartApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useRemoveFromCart() {
  return useSWRMutation('useRemoveFromCart', async (_: string, { arg }: { arg: RemoveFromCartDto }) => {
    const response = await cartApi.cartControllerRemoveItemFromCartByUser(arg);
    return response.data;
  });
}
