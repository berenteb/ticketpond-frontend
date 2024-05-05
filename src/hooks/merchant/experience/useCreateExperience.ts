import { CreateExperienceDto } from '@/api';
import { experienceMerchantApi } from '@/services/authenticated-api.service';
import useSWRMutation from 'swr/mutation';

export function useCreateExperience() {
  return useSWRMutation('useCreateExperience', async (_: string, { arg }: { arg: CreateExperienceDto }) => {
    const response = await experienceMerchantApi.experienceMerchantControllerCreateExperience(arg);
    return response.data;
  });
}
