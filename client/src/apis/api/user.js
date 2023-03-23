import { instance } from 'apis/utils';

export const getUserInfo = async id => {
  const token = localStorage.getItem('authorization');
  const response = await instance.get(`/mypage/${id}`, { headers: { Authorization: token } });
  console.log(response.data);
};
