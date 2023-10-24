import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminExperience(id: string) {
  return useSWR(['useAdminExperience', id], async () => {
    const response = await authenticatedApiService.experienceAdminControllerGetExperienceById(id);
    return response.data;
  });
}
