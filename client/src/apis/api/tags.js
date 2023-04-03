import { instance } from 'apis/utils';

export const getTags = async () => {
  try {
    const res = await instance.get(`/tag?page=1&size=10&sort=tagId,desc`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getTagsSearch = async tag => {
  try {
    const res = await instance.get(
      `commission/search?page=1&size=10&sort=commissionId,desc&tags=${tag}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
