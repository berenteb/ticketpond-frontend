import { UpdateTicketDto } from '@/api';
import { ticketAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateTicket(id: string) {
  return useSWRMutation(['useAdminUpdateTicket', id], async (_: string[], { arg }: { arg: UpdateTicketDto }) => {
    const response = await ticketAdminApi.ticketAdminControllerUpdateTicket(id, arg);
    return response.data;
  });
}
