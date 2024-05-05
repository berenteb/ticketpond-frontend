import { CreateTicketDto } from '@/api';
import { ticketMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useCreateTicket() {
  return useSWRMutation('useCreateTicket', async (_: string, { arg }: { arg: CreateTicketDto }) => {
    const response = await ticketMerchantApi.ticketMerchantControllerCreateTicket(arg);
    return response.data;
  });
}
