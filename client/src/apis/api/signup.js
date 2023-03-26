import { instance } from 'apis/utils';

export const signup = async ({ email, password, nickname, roles }) => {
  try {
    await instance.post('/members/sign-up', {
      email,
      password,
      nickname,
      roles,
    });
    return { success: true };
  } catch (error) {
    const response = error.response;
    if (response) {
      console.log(response.data);
      return { success: false, message: response.data };
    } else {
      console.log(error);
      return { success: false, message: '서버와의 연결이 끊어졌습니다.' };
    }
  }
};
