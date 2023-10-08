import { RemoveFromCartDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useRemoveFromCartForCustomer() {
  return useSWRMutation('remove-from-cart-for-customer', async (_: string, { arg }: { arg: RemoveFromCartDto }) => {
    const response = await authenticatedApiService.cartControllerRemoveItemFromCartByUser(arg);
    return response.data;
  });
}
