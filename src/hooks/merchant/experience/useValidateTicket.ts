import { ValidationRequestDto } from '@/api';
import { experienceMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useValidateTicket(experienceId: string) {
  return useSWRMutation('useValidateTicket', async (_: string, { arg }: { arg: ValidationRequestDto }) => {
    const response = await experienceMerchantApi.experienceMerchantControllerValidateExperiencePass(experienceId, arg);
    return response.data;
  });
}
