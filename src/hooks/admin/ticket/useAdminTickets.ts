import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminTickets() {
  return useSWR('useAdminTickets', async () => {
    const response = await authenticatedApiService.ticketAdminControllerGetTickets();
    return response.data;
  });
}
