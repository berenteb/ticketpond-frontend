import { UpdateExperienceDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useUpdateExperience(id: string) {
  return useSWRMutation(['updateExperience', id], async (_: string[], { arg }: { arg: UpdateExperienceDto }) => {
    const response = await authenticatedApiService.experienceControllerUpdateExperience(id, arg);
    return response.data;
  });
}
