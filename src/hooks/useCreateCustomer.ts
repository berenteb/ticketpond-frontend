import { CreateCustomerDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCreateCustomer() {
  return useSWRMutation('createCustomer', async (_: string, { arg }: { arg: CreateCustomerDto }) => {
    const response = await authenticatedApiService.customerControllerRegisterCustomer(arg);
    return response.data;
  });
}
