import { instance } from 'apis/utils';

const login = async ({ email, password }) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });
    const authorization = response.headers.authorization;
    const memberId = response.data.memberId;
    const refreshToken = response.data.refreshToken; // 리프레시 토큰 저장 추가

    instance.defaults.headers.Authorization = authorization;
    localStorage.setItem('authorization', authorization);
    localStorage.setItem('memberId', memberId);
    localStorage.setItem('refreshToken', refreshToken); // 리프레시 토큰 저장 추가

    return { success: true };
  } catch (error) {
    const response = error.response;
    if (response) {
      const status = response.status;
      if (status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          return { success: false, message: '로그인이 필요합니다.' };
        }
        try {
          const newAccessTokenResponse = await instance.post('/refresh-token', {
            refreshToken,
          });
          const newAuthorization = newAccessTokenResponse.data.accessToken;
          const memberId = newAccessTokenResponse.data.memberId;
          const newRefreshToken = newAccessTokenResponse.data.refreshToken; // 새 리프레시 토큰 저장 추가

          instance.defaults.headers.Authorization = newAuthorization;
          localStorage.setItem('authorization', newAuthorization);
          localStorage.setItem('memberId', memberId);
          localStorage.setItem('refreshToken', newRefreshToken); // 새 리프레시 토큰 저장 추가

          console.log('New refresh token:', newRefreshToken); // 새 리프레시 토큰 콘솔 출력

          // 재시도
          const retryResponse = await instance.post('/login', {
            email,
            password,
          });
          const retryAuthorization = retryResponse.headers.authorization;
          const retryMemberId = retryResponse.data.memberId;

          instance.defaults.headers.Authorization = retryAuthorization;
          localStorage.setItem('authorization', retryAuthorization);
          localStorage.setItem('memberId', retryMemberId);

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
      } else {
        console.log(response.data);
        return { success: false, message: response.data };
      }
    } else {
      console.log(error);
      return { success: false, message: '서버와의 연결이 끊어졌습니다.' };
    }
  }
};

export { login };
