import { instance, imgInstance } from 'apis/utils';

export const getCommission = async id => {
  try {
    const res = await instance.get(`/commission/${id}`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postCommission = async data => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await imgInstance.post('/commission', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const patchCommission = async (data, id) => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await imgInstance.patch(`/commission/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCommission = async id => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.delete(`/commission/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
