import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useExperiences() {
  return useSWR('experience', async () => {
    const response = await authenticatedApiService.experienceControllerGetExperiences();
    return response.data;
  });
}
