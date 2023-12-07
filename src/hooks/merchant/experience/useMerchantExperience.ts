import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWR from 'swr';

export function useMerchantExperience(id: string) {
  return useSWR(['useMerchantExperience', id], async () => {
    const response = await authenticatedApiService.experienceMerchantControllerGetExperienceById(id);
    return response.data;
  });
}
