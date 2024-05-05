import { customerApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMe() {
  return useSWR(
    'useMe',
    async () => {
      const response = await customerApi.customerControllerGetMe();
      return response.data;
    },
    { revalidateOnFocus: false }
  );
}
