import { orderAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminOrderFulfill(id: string, onSuccess?: () => void) {
  return useSWRMutation(
    ['useAdminOrderFulfill', id],
    async () => {
      const response = await orderAdminApi.orderAdminControllerFulfillOrder(id);
      return response.data;
    },
    { onSuccess }
  );
}
