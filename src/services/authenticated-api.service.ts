'use client';

import {
  CartApi,
  CustomerAdminApi,
  CustomerApi,
  ExperienceAdminApi,
  ExperienceMerchantApi,
  MerchantAdminApi,
  MerchantApi,
  MerchantSelfApi,
  OrderAdminApi,
  OrderApi,
  OrderMerchantApi,
  PaymentApi,
  TicketAdminApi,
  TicketMerchantApi,
} from '@/api';
import axios from 'axios';

async function getToken(): Promise<string | undefined> {
  try {
    const res = await axios.get<{ accessToken: string }>('/api/token');
    return res.data.accessToken;
  } catch (e) {
    return undefined;
  }
}

export const authenticatedAxios = axios.create();

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
    console.log(error);
    if (error.response.status === 401) {
      // location.href = '/api/auth/login';
    } else if (error.response.status === 403) {
      // location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const customerApi = new CustomerApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);
export const customerAdminApi = new CustomerAdminApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);

export const merchantAdminApi = new MerchantAdminApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
export const merchantSelfApi = new MerchantSelfApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);

export const experienceAdminApi = new ExperienceAdminApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
export const experienceMerchantApi = new ExperienceMerchantApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);

export const ticketAdminApi = new TicketAdminApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);
export const ticketMerchantApi = new TicketMerchantApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);

export const orderApi = new OrderApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);
export const orderMerchantApi = new OrderMerchantApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
export const orderAdminApi = new OrderAdminApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);

export const cartApi = new CartApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);

export const paymentApi = new PaymentApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, authenticatedAxios);

export const authenticatedMerchantApi = new MerchantApi(
  undefined,
  process.env.NEXT_PUBLIC_BACKEND_URL,
  authenticatedAxios
);
