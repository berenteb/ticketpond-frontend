import { CreateExperienceDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCreateExperience() {
  return useSWRMutation('useCreateExperience', async (_: string, { arg }: { arg: CreateExperienceDto }) => {
    const response = await authenticatedApiService.experienceMerchantControllerCreateExperience(arg);
    return response.data;
  });
}
