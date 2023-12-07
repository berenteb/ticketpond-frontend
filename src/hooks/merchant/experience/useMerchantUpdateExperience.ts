import { UpdateExperienceDto } from '@/api';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useMerchantUpdateExperience(id: string) {
  return useSWRMutation(
    ['useMerchantUpdateExperience', id],
    async (_: string[], { arg }: { arg: UpdateExperienceDto }) => {
      const response = await authenticatedApiService.experienceMerchantControllerUpdateExperience(id, arg);
      return response.data;
    }
  );
}
