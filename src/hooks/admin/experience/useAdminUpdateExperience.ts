import { UpdateExperienceDto } from '@/api';
import { experienceAdminApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useAdminUpdateExperience(id: string) {
  return useSWRMutation(
    ['useAdminUpdateExperience', id],
    async (_: string[], { arg }: { arg: UpdateExperienceDto }) => {
      const response = await experienceAdminApi.experienceAdminControllerUpdateExperience(id, arg);
      return response.data;
    }
  );
}
