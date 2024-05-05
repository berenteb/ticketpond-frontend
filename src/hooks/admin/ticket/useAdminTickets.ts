import { ticketAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminTickets() {
  return useSWR('useAdminTickets', async () => {
    const response = await ticketAdminApi.ticketAdminControllerGetTickets();
    return response.data;
  });
}
