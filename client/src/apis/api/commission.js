import { instance } from 'apis/utils';
import { imgInstance } from 'apis/utils';

export const getCommission = async id => {
  try {
    const res = await instance.get(`/commission/${id}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postCommission = async data => {
  try {
    const res = await imgInstance.post('/commission', data);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
