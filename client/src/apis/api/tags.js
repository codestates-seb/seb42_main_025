import { instance } from 'apis/utils';

export const getTags = async () => {
  try {
    const res = await instance.get(`/tag?page=1&size=10&sort=tagId,desc`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
