import { instance } from 'apis/utils';

export const getCommissions = async path => {
  try {
    const res = await instance.get(path);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
