import { authenticatedApiService } from '@/services/authenticatedApi.service';
import useSWRMutation from 'swr/mutation';

export function useAssetUpload(onSuccess?: (fileName: string) => void, onError?: () => void) {
  return useSWRMutation(
    'useAssetUpload',
    async (
      _: string,
      {
        arg,
      }: {
        arg: File;
      }
    ) => {
      const response = await authenticatedApiService.assetControllerUploadFile(arg);
      return response.data;
    },
    { onSuccess, onError }
  );
}
