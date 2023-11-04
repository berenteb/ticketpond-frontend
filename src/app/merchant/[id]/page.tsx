import { TextLink } from '@/components/text-Link/TextLink';
import { publicApiService } from '@/services/publicApiService';
import { ParamProps } from '@/types/common.types';
import { getSuffixedTitle } from '@/utils/common.utils';
import { Metadata } from 'next';
import { cache } from 'react';
import { TbBuilding, TbMail, TbPhone } from 'react-icons/tb';

export async function generateMetadata({ params }: ParamProps): Promise<Metadata> {
  const merchant = await getMerchantById(params.id);

  return {
    title: getSuffixedTitle(merchant.name),
    description: merchant.description,
    openGraph: {
      description: merchant.description,
      title: getSuffixedTitle(merchant.name),
    },
  };
}

export default async function MerchantDetailsPage({ params }: ParamProps) {
  const merchant = await getMerchantById(params.id);
  if (!merchant) return null;
  return (
    <main>
      <h1 className='text-5xl font-bold'>{merchant.name}</h1>
      <p className='body-paragraph'>{merchant.description}</p>
      <div className='flex gap-1'>
        <TbMail size={20} />
        <TextLink href={'mailto:' + merchant.email}>{merchant.email}</TextLink>
      </div>
      <div className='flex gap-1'>
        <TbPhone size={20} />
        <TextLink href={'tel:' + merchant.phone}>{merchant.phone}</TextLink>
      </div>
      <div className='flex gap-1'>
        <TbBuilding size={20} />
        <TextLink href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(merchant.address)}`}>
          {merchant.address}
        </TextLink>
      </div>
    </main>
  );
}

const getMerchantById = cache(async (id: string) => {
  const res = await publicApiService.merchantControllerGetMerchant(id);
  return res.data;
});
