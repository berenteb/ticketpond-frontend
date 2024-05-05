import { experienceMerchantApi } from '@/services/authenticated-api.service';
import { setBannerImages } from '@/utils/image.utils';
import useSWR from 'swr';

export function useMerchantExperiences() {
  return useSWR('useMerchantExperiences', async () => {
    const response = await experienceMerchantApi.experienceMerchantControllerGetExperiences();
    return setBannerImages(response.data);
  });
}
