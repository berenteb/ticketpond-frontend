'use client';

import { DataCard } from '@/components/data-card/DataCard';
import { Spinner } from '@/components/spinner/Spinner';
import { Title } from '@/components/title/Title';
import { useMe } from '@/hooks/customer/profile/useMe';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default withPageAuthRequired(function ProfilePage() {
  const authUser = useUser();
  const me = useMe();
  if (authUser.isLoading || me.isLoading) return <Spinner />;
  if (authUser.error || me.error) return <div>Hiba</div>;
  if (!authUser.user || !me.data) return <></>;
  return (
    <main>
      <Title>Profilom</Title>
      <div className='flex gap-5 items-center'>
        {authUser.user.picture && (
          <Image className='rounded-full' src={authUser.user.picture} alt='Profile' width={50} height={50} />
        )}
        <h1>
          {me.data.lastName} {me.data.firstName}
        </h1>
      </div>
      <DataCard phone={me.data.phone} email={me.data.email} address={me.data.address} />
    </main>
  );
}, {});
