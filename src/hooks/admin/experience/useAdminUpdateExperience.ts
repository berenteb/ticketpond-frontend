import { UpdateExperienceDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateExperience(id: string) {
  return useSWRMutation(
    ['useAdminUpdateExperience', id],
    async (_: string[], { arg }: { arg: UpdateExperienceDto }) => {
      const response = await authenticatedApiService.experienceAdminControllerUpdateExperience(id, arg);
      return response.data;
    }
  );
}
