import { UpdateCustomerDto } from '@/api';
import { customerAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateCustomer(id: string) {
  return useSWRMutation(['useAdminUpdateCustomer', id], async (_: string[], { arg }: { arg: UpdateCustomerDto }) => {
    const response = await customerAdminApi.customerAdminControllerUpdateCustomer(id, arg);
    return response.data;
  });
}
