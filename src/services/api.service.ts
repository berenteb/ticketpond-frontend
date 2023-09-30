import { DefaultApi } from '@/api';
import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://localhost:3001',
});

export const apiService = new DefaultApi(undefined, undefined, axiosService);
