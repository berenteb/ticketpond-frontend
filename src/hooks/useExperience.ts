import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useExperience(id: string) {
  return useSWR(['experience', id], async () => {
    const response = await authenticatedApiService.experienceAdminControllerGetExperienceById(id);
    return response.data;
  });
}
