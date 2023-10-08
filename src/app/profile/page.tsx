'use client';

import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { useMe } from '@/hooks/useMe';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import { TbBuilding, TbMail, TbPhone } from 'react-icons/tb';

export default withPageAuthRequired(function ProfilePage() {
  const authUser = useUser();
  const me = useMe();
  if (authUser.isLoading || me.isLoading) return <div>Loading...</div>;
  if (authUser.error || me.error) return <div>Hiba</div>;
  if (!authUser.user || !me.data) return <></>;
  return (
    <main>
      <div className='flex gap-5 items-center'>
        {authUser.user.picture && (
          <Image className='rounded-full' src={authUser.user.picture} alt='Profile' width={50} height={50} />
        )}
        <h1>
          {me.data.lastName} {me.data.firstName}
        </h1>
      </div>
      <Card className='flex flex-col gap-5 p-5 w-fit'>
        <div className='flex gap-1'>
          <TbMail size={20} />
          <p>{me.data.email}</p>
        </div>
        <div className='flex gap-1'>
          <TbPhone size={20} />
          <p>{me.data.phone}</p>
        </div>
        <div className='flex gap-1'>
          <TbBuilding size={20} />
          <p>{me.data.address}</p>
        </div>
      </Card>
      <Link href={'/api/auth/logout'}>
        <Button variant='subtle'>Kijelentkezés</Button>
      </Link>
    </main>
  );
}, {});
