import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminOrderFulfill(id: string, onSuccess?: () => void) {
  return useSWRMutation(
    ['useAdminOrderFulfill', id],
    async () => {
      const response = await authenticatedApiService.orderAdminControllerFulfillOrder(id);
      return response.data;
    },
    { onSuccess }
  );
}
