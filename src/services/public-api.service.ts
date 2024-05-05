import { AssetApi, ExperienceApi, MerchantApi, TicketApi } from '@/api';
import axios from 'axios';

export const publicAxios = axios.create();

export const ticketApi = new TicketApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, publicAxios);
export const experienceApi = new ExperienceApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, publicAxios);
export const merchantApi = new MerchantApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, publicAxios);
export const assetApi = new AssetApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, publicAxios);
