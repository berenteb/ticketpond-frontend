import { ticketMerchantApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantTickets() {
  return useSWR('useMerchantTickets', async () => {
    const response = await ticketMerchantApi.ticketMerchantControllerGetTickets();
    return response.data;
  });
}
