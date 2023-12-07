import { CreateTicketDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCreateTicket() {
  return useSWRMutation('useCreateTicket', async (_: string, { arg }: { arg: CreateTicketDto }) => {
    const response = await authenticatedApiService.ticketMerchantControllerCreateTicket(arg);
    return response.data;
  });
}
