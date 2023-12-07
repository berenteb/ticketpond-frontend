import { UpdateCustomerDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateCustomer(id: string) {
  return useSWRMutation(['useAdminUpdateCustomer', id], async (_: string[], { arg }: { arg: UpdateCustomerDto }) => {
    const response = await authenticatedApiService.customerAdminControllerUpdateCustomerByInternalId(id, arg);
    return response.data;
  });
}
