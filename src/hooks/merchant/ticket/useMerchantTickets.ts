import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantTickets() {
  return useSWR('useMerchantTickets', async () => {
    const response = await authenticatedApiService.ticketMerchantControllerGetTickets();
    return response.data;
  });
}
