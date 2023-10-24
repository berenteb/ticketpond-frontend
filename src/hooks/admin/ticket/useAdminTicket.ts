import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminTicket(id: string) {
  return useSWR(['useAdminTicket', id], async () => {
    const response = await authenticatedApiService.ticketAdminControllerGetTicketById(id);
    return response.data;
  });
}
