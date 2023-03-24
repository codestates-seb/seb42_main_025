import { instance } from 'apis/utils';

export const getUserInfo = async id => {
  const token = localStorage.getItem('authorization');
  try {
    const res = await instance.get(`/members/${id}`, { headers: { Authorization: token } });
    console.log(res.data.data);
    return res.data;
  } catch (err) {
    return err;
  }
};

// export const getUserProgressInfo = await instance.get(`commission`)
