import { instance } from 'apis/utils';

export const getCommissionRequest = async data => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.post(`/trade`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
