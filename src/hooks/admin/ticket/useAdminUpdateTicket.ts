import { UpdateTicketDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateTicket(id: string) {
  return useSWRMutation(['useAdminUpdateTicket', id], async (_: string[], { arg }: { arg: UpdateTicketDto }) => {
    const response = await authenticatedApiService.ticketAdminControllerUpdateTicket(id, arg);
    return response.data;
  });
}
