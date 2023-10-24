import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantExperiences() {
  return useSWR('useMerchantExperiences', async () => {
    const response = await authenticatedApiService.experienceMerchantControllerGetExperiences();
    return response.data;
  });
}
