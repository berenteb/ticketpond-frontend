import { customerApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function usePermissions() {
  return useSWR('usePermissions', async () => {
    const response = await customerApi.customerControllerGetPermissions();
    return response.data;
  });
}
