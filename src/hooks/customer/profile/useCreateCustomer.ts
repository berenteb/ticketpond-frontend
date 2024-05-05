import { CreateCustomerDto } from '@/api';
import { customerApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useCreateCustomer() {
  return useSWRMutation('useCreateCustomer', async (_: string, { arg }: { arg: CreateCustomerDto }) => {
    const response = await customerApi.customerControllerRegisterCustomer(arg);
    return response.data;
  });
}
