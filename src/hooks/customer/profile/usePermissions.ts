import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function usePermissions() {
  return useSWR('usePermissions', async () => {
    const response = await authenticatedApiService.customerControllerGetPermissions();
    return response.data;
  });
}
