'use client';

import { DropdownMenu } from '@/components/dropdown-menu/DropdownMenu';
import { TextLink } from '@/components/text-Link/TextLink';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import { useUser } from '@auth0/nextjs-auth0/client';
import { isAxiosError } from 'axios';
import { redirect } from 'next/navigation';
import useSWR from 'swr';

export function AuthMenu() {
  const { user } = useUser();
  const { error } = useSWR('/customer/me', () => authenticatedApiService.customerControllerGetMe());
  if (!user)
    return (
      <TextLink className='text-lg' href='/api/auth/login'>
        Bejelentkezés
      </TextLink>
    );
  if (user && isAxiosError(error) && error.response?.status === 404) return redirect('/profile/create');
  return (
    <DropdownMenu
      title='Profil'
      items={[
        { title: 'Profilom', href: '/profile' },
        { title: 'Rendeléseim', href: '/profile/orders' },
        { title: 'Kijelentkezés', href: '/api/auth/logout' },
      ]}
    />
  );
}
