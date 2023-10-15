import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useTicket(id: string) {
  return useSWR(['tickets', id], async () => {
    const response = await authenticatedApiService.ticketAdminControllerGetTicketById(id);
    return response.data;
  });
}
