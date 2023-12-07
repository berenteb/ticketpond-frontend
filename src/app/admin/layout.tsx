'use client';

import { Spinner } from '@/components/spinner/Spinner';
import { TextLink } from '@/components/text-Link/TextLink';
import { Title } from '@/components/title/Title';
import { usePermissions } from '@/hooks/customer/profile/usePermissions';
import { Permission } from '@/utils/permission.utils';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data, isLoading } = usePermissions();
  if (isLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
  if (!data?.includes(Permission.ADMIN_ALL)) return router.push('/');
  return (
    <main>
      <div className='flex justify-between items-center'>
        <Title>Szuperadmin</Title>
        <h1>Szuperadmin</h1>
        <TextLink href='/admin'>Admin kezdőlap</TextLink>
      </div>
      {children}
    </main>
  );
}
