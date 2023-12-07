export function getImageUrl(fileName: string) {
  return `${process.env.NEXT_PUBLIC_ASSET_URL}/${fileName}`;
}

export function setBannerImage<T extends { bannerImage: string }>(obj: T) {
  return {
    ...obj,
    bannerImage: getImageUrl(obj.bannerImage),
  };
}

export function setBannerImages<T extends { bannerImage: string }>(arr: T[]) {
  return arr.map(setBannerImage);
}
