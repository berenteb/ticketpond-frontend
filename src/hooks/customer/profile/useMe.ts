import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMe() {
  return useSWR(
    'useMe',
    async () => {
      const response = await authenticatedApiService.customerControllerGetMe();
      return response.data;
    },
    { revalidateOnFocus: false }
  );
}
