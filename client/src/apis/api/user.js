import { instance } from 'apis/utils';

export const getUserInfo = async id => {
  try {
    const res = await instance.get(`/members/${id}`);
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};

// export const getUserProgressInfo = await instance.get(`commission`)
