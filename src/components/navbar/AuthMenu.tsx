'use client';

import { TextLink } from '@/components/text-Link/TextLink';
import { authenticatedApiService } from '@/services/authenticatedApi.service';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Menu } from '@headlessui/react';
import { isAxiosError } from 'axios';
import { redirect } from 'next/navigation';
import { TbChevronDown } from 'react-icons/tb';
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
    <div className='relative'>
      <Menu>
        <Menu.Button className='text-lg flex items-center gap-2'>
          Profil <TbChevronDown />
        </Menu.Button>
        <Menu.Items className='absolute right-0 top-full bg-white shadow-lg rounded-md flex flex-col p-5 gap-3'>
          <Menu.Item>
            <TextLink className='text-lg' href='/profile/orders'>
              Rendeléseim
            </TextLink>
          </Menu.Item>
          <Menu.Item>
            <TextLink className='text-lg' href='/profile'>
              Profilom
            </TextLink>
          </Menu.Item>
          <Menu.Item>
            <TextLink className='text-lg' href='/api/auth/logout'>
              Kijelentkezés
            </TextLink>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
