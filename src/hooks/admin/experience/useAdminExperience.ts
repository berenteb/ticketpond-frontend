import { experienceAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminExperience(id: string) {
  return useSWR(['useAdminExperience', id], async () => {
    const response = await experienceAdminApi.experienceAdminControllerGetExperienceById(id);
    return response.data;
  });
}
