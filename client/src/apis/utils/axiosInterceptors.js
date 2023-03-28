import axios from 'axios';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authorization');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axios;
