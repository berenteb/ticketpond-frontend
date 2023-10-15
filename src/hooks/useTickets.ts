import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useTickets() {
  return useSWR('tickets', async () => {
    const response = await authenticatedApiService.ticketControllerGetTickets();
    return response.data;
  });
}
