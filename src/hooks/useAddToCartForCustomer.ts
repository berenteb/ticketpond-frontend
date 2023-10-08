import { AddToCartDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAddToCartForCustomer() {
  return useSWRMutation('add-to-cart-for-customer', async (_: string, { arg }: { arg: AddToCartDto }) => {
    const response = await authenticatedApiService.cartControllerAddItemToCartByUser(arg);
    return response.data;
  });
}
