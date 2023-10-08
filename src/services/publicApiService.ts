import { DefaultApi } from '@/api';
import axios from 'axios';

export const publicAxios = axios.create();

export const publicApiService = new DefaultApi(undefined, process.env.NEXT_PUBLIC_BACKEND_URL, publicAxios);
