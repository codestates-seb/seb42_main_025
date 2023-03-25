import { instance } from 'apis/utils';

export const postTrade = async data => {
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

export const getTrade = async () => {
  try {
    const res = await instance.get(`/trade?page=1&size=10&sort=tradeId,desc`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
