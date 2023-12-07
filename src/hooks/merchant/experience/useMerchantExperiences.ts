import { authenticatedApiService } from '@/services/authenticatedApi.service';
import { setBannerImages } from '@/utils/image.utils';
import useSWR from 'swr';

export function useMerchantExperiences() {
  return useSWR('useMerchantExperiences', async () => {
    const response = await authenticatedApiService.experienceMerchantControllerGetExperiences();
    return setBannerImages(response.data);
  });
}
