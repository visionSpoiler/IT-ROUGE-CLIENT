import ky from 'ky';
import {API_BASE_URL} from '../constants';

export const apiClient = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000, // 10초
  credentials: 'include',
});

