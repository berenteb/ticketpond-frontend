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

authenticatedAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      location.href = '/login';
    } else if (error.response.status === 403) {
      location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const authenticatedApiService = new DefaultApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
