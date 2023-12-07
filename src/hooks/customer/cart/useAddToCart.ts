import { AddToCartDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAddToCart() {
  return useSWRMutation('useAddToCart', async (_: string, { arg }: { arg: AddToCartDto }) => {
    const response = await authenticatedApiService.cartControllerAddItemToCartByUser(arg);
    return response.data;
  });
}
