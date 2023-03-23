export const emailValidate = (email, setError) => {
  if (!email) {
    setError('이메일을 입력해주세요.');
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setError('이메일 형식이 올바르지 않습니다.');
    return false;
  }
  setError('');
  return true;
};

export const passwordValidate = (passwordValue, setError) => {
  if (!passwordValue) {
    setError('비밀번호를 입력해주세요.');
    return false;
  } else if (passwordValue.length < 8) {
    setError('비밀번호는 8자리 이상이어야 합니다.');
    return false;
  }

  setError('');
  return true;
};

export const nicknameValidate = (nickname, setError) => {
  if (!nickname) {
    setError('닉네임을 입력해주세요.');
    return false;
  } else if (nickname.length < 2) {
    setError('닉네임은 2자리 이상이어야 합니다.');
    return false;
  }

  setError('');
  return true;
};
