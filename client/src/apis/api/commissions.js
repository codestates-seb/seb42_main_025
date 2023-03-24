import { instance } from 'apis/utils';

export const getCommissions = async () => {
  try {
    const res = await instance.get(`/commission?list=10&page=1`);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

// export const postCommissions = async () => {
//   const token = localStorage.getItem('authorization');
//   try {
//     const res = await instance.post('/commission', )
//   }
// }
