import { instance } from 'apis/utils';

export const getCommissions = async filter => {
  try {
    const res = await instance.get(`/commission?page=1&size=10&sort=${filter},desc`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSortCommissions = async path => {
  try {
    const res = await instance.get(path);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
