import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://3.37.139.165/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.defaults.timeout = 5000;
