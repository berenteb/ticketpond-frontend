import { ticketMerchantApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantTicket(id: string) {
  return useSWR(['useMerchantTicket', id], async () => {
    const response = await ticketMerchantApi.ticketMerchantControllerGetTicketById(id);
    return response.data;
  });
}
