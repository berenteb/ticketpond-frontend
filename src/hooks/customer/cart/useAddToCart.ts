import { AddToCartDto } from '@/api';
import { cartApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAddToCart() {
  return useSWRMutation('useAddToCart', async (_: string, { arg }: { arg: AddToCartDto }) => {
    const response = await cartApi.cartControllerAddItemToCartByUser(arg);
    return response.data;
  });
}
