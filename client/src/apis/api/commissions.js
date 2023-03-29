import { instance } from 'apis/utils';

export const getCommissions = async () => {
  try {
    const res = await instance.get(`commission?page=1&size=10&sort=commissionId,desc`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSortCommissions = async path => {
  try {
    const res = await instance.get(path);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
