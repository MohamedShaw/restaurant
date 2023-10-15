import axios from 'axios';
import {API_ENDPOINT, token} from './urls.json';
const instance = axios.create({
  baseURL: API_ENDPOINT,
});

instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
    } as any;

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as any;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
