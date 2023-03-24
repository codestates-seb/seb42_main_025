import { instance } from 'apis/utils';

export const posttrade = async data => {
  try {
    const res = await instance.post('/trade', data);
    console.log(res.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
