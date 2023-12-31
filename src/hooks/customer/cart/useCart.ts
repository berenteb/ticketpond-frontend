import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useCart() {
  return useSWR('useCart', async () => {
    const response = await authenticatedApiService.cartControllerGetCartForMe();
    return response.data;
  });
}
