import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useAdminExperiences() {
  return useSWR('useAdminExperiences', async () => {
    const response = await authenticatedApiService.experienceAdminControllerGetExperiences();
    return response.data;
  });
}
