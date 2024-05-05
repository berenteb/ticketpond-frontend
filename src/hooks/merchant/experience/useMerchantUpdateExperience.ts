import { UpdateExperienceDto } from '@/api';
import { experienceMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useMerchantUpdateExperience(id: string) {
  return useSWRMutation(
    ['useMerchantUpdateExperience', id],
    async (_: string[], { arg }: { arg: UpdateExperienceDto }) => {
      const response = await experienceMerchantApi.experienceMerchantControllerUpdateExperience(id, arg);
      return response.data;
    }
  );
}
