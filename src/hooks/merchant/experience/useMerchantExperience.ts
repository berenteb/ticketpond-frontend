import { experienceMerchantApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useMerchantExperience(id: string) {
  return useSWR(['useMerchantExperience', id], async () => {
    const response = await experienceMerchantApi.experienceMerchantControllerGetExperienceById(id);
    return response.data;
  });
}
