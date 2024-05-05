import { UpdateTicketDto } from '@/api';
import { ticketMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useMerchantUpdateTicket(id: string) {
  return useSWRMutation(['useMerchantUpdateTicket', id], async (_: string[], { arg }: { arg: UpdateTicketDto }) => {
    const response = await ticketMerchantApi.ticketMerchantControllerUpdateTicket(id, arg);
    return response.data;
  });
}
