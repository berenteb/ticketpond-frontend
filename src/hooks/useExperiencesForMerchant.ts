import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useExperiencesForMerchant() {
  return useSWR('experiencesForMerchant', async () => {
    const response = await authenticatedApiService.experienceAdminControllerGetExperiences();
    return response.data;
  });
}
