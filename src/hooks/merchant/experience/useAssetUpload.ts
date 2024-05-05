import { assetApi } from '@/services/public-api.service';
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
      const response = await assetApi.assetControllerUploadFile(arg);
      return response.data;
    },
    { onSuccess, onError }
  );
}
