import { experienceAdminApi } from '@/services/authenticated-api.service';
import useSWR from 'swr';

export function useAdminExperiences() {
  return useSWR('useAdminExperiences', async () => {
    const response = await experienceAdminApi.experienceAdminControllerGetExperiences();
    return response.data;
  });
}
