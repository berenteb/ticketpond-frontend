import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCheckout() {
  return useSWRMutation('useCheckout', async () => {
    const response = await authenticatedApiService.cartControllerCheckoutForMe();
    return response.data;
  });
}
