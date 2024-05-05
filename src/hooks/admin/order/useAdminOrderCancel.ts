import { orderAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminOrderCancel(id: string, onSuccess?: () => void) {
  return useSWRMutation(
    ['useAdminOrderCancel', id],
    async () => {
      const response = await orderAdminApi.orderAdminControllerCancelOrder(id);
      return response.data;
    },
    { onSuccess }
  );
}
