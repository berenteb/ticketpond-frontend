import { UpdateCustomerDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useUpdateCustomer(id: string) {
  return useSWRMutation(['updateCustomer', id], async (_: string[], { arg }: { arg: UpdateCustomerDto }) => {
    const response = await authenticatedApiService.customerControllerUpdateCustomer(id, arg);
    return response.data;
  });
}
