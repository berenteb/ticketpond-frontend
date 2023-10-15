import { CreateExperienceDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useCreateExperience() {
  return useSWRMutation('createExperience', async (_: string, { arg }: { arg: CreateExperienceDto }) => {
    const response = await authenticatedApiService.experienceAdminControllerCreateExperience(arg);
    return response.data;
  });
}
