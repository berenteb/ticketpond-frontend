import { ValidationRequestDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useValidateTicket(experienceId: string) {
  return useSWRMutation('useValidateTicket', async (_: string, { arg }: { arg: ValidationRequestDto }) => {
    const response = await authenticatedApiService.experienceMerchantControllerValidateExperiencePass(
      experienceId,
      arg
    );
    return response.data;
  });
}
