'use client';

import { DefaultApi } from '@/api';
import axios from 'axios';

async function getToken(): Promise<string | undefined> {
  try {
    const res = await axios.get<{ accessToken: string }>('/api/token');
    return res.data.accessToken;
  } catch (e) {
    return undefined;
  }
}

const authenticatedAxios = axios.create();

authenticatedAxios.interceptors.request.use(async (config) => {
  const accessToken = await getToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const authenticatedApiService = new DefaultApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
