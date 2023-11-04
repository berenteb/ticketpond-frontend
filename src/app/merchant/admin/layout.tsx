'use client';

import { Spinner } from '@/components/spinner/Spinner';
import { TextLink } from '@/components/text-Link/TextLink';
import { Title } from '@/components/title/Title';
import { usePermissions } from '@/hooks/customer/profile/usePermissions';
import { useMerchantMe } from '@/hooks/merchant/profile/useMerchantMe';
import { Permission } from '@/utils/permission.utils';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function MerchantAdminLayout({ children }: PropsWithChildren) {
  const merchant = useMerchantMe();
  const router = useRouter();
  const permissions = usePermissions();
  if (permissions.isLoading || merchant.isLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
  if (!permissions.data?.includes(Permission.MERCHANT_ALL)) return router.push('/');
  return (
    <main>
      <Title>Kereskedő Admin</Title>
      <div className='flex justify-between items-center'>
        <h1>
          Admin <span className='text-slate-300'>| {merchant.data?.name}</span>
        </h1>
        <TextLink href='/merchant/admin'>Admin kezdőlap</TextLink>
      </div>
      {children}
    </main>
  );
}
