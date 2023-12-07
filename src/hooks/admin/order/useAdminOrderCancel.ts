import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminOrderCancel(id: string, onSuccess?: () => void) {
  return useSWRMutation(
    ['useAdminOrderCancel', id],
    async () => {
      const response = await authenticatedApiService.orderAdminControllerCancelOrder(id);
      return response.data;
    },
    { onSuccess }
  );
}
