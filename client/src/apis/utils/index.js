import axios from './axiosInterceptors';

export const instance = axios.create({
  baseURL: 'http://52.79.154.227:8080',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const imgInstance = axios.create({
  baseURL: 'http://52.79.154.227:8080',
  headers: { 'Content-Type': 'multipart/form-data; boundary=[{boundary_term}]' },
  withCredentials: true,
});

instance.defaults.timeout = 5000;

// axios.defaults.headers.Authorization = response.headers.get('authorization');
