import { UpdateTicketDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useUpdateTicket(id: string) {
  return useSWRMutation(['updateTicket', id], async (_: string[], { arg }: { arg: UpdateTicketDto }) => {
    const response = await authenticatedApiService.ticketAdminControllerUpdateTicket(id, arg);
    return response.data;
  });
}
