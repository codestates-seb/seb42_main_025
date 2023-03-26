import { instance } from 'apis/utils';

const login = async ({ email, password }) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });
    const authorization = response.headers.authorization;
    const memberId = response.data.memberId;

    instance.defaults.headers.Authorization = authorization;
    localStorage.setItem('authorization', authorization);
    localStorage.setItem('memberId', memberId);

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

export { login };
