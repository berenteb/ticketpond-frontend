import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useTicketsForMerchant() {
  return useSWR('ticketsForMerchant', async () => {
    const response = await authenticatedApiService.ticketAdminControllerGetTicketsForMerchant();
    return response.data;
  });
}
