import { UpdateTicketDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useMerchantUpdateTicket(id: string) {
  return useSWRMutation(['useMerchantUpdateTicket', id], async (_: string[], { arg }: { arg: UpdateTicketDto }) => {
    const response = await authenticatedApiService.ticketMerchantControllerUpdateTicket(id, arg);
    return response.data;
  });
}
