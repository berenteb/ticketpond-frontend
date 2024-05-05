import { ticketAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminTicket(id: string) {
  return useSWR(['useAdminTicket', id], async () => {
    const response = await ticketAdminApi.ticketAdminControllerGetTicketById(id);
    return response.data;
  });
}
