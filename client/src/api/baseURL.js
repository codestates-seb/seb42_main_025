// import axios from 'axios';
// const baseURL = axios.create({
//   baseURL: 'http://localhost:3001',
// });
// export default baseURL;

import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://3.37.139.165/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;
