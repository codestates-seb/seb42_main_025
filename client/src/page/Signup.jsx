import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [nickname, setNickname] = useState('');
  const [NicknameError, setNicknameError] = useState('');

  const [userType, setUserType] = useState('writer');

  const navigate = useNavigate();

  const validateEmail = value => {
    if (!value) {
      setEmailError('이메일을 입력해주세요.');

      return false;
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('이메일 형식이 올바르지 않습니다.');

      return false;
    }
    setEmailError('');

    return true;
  };

  const validatePassword = value => {
    if (!value) {
      setPasswordError('비밀번호를 입력해주세요.');
      return false;
    }
    if (value.length < 8) {
      setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateNickname = value => {
    if (!value) {
      setNicknameError('닉네임을 입력해주세요.');
      return false;
    }
    if (value.length < 2) {
      setNicknameError('닉네임은 2자리 이상이어야 합니다.');
      return false;
    }
    setNicknameError('');
    return true;
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://3.37.139.165/members/sign-up', {
        email,
        password,
        nickname,
        userType,
      });
      if (response && response.data) {
        console.log(response.data);
      }
      navigate('/Login');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isNicknameValid = validateNickname(nickname);

    if (!isEmailValid || !isPasswordValid || !isNicknameValid) {
      return;
    }

    handleSignup();
  };

  return (
    <Container>
      <SignupContainer>
        <OptionContainer>
          <WriteButton active={userType === 'writer'} onClick={() => setUserType('writer')}>
            Writer
          </WriteButton>
          <UserButton active={userType === 'user'} onClick={() => setUserType('user')}>
            User
          </UserButton>
        </OptionContainer>
        <InputComponent
          label="Email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)}
          error={emailError}
        />
        <InputComponent
          label="Password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={e => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
          error={passwordError}
          type="password"
        />
        <InputComponent
          label="Nickname"
          placeholder="닉네임을 입력하세요."
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          onBlur={() => validateNickname(nickname)}
          error={NicknameError}
        />
        <SignupButtonWrapper>
          <SignupButton type="submit" onClick={handleSubmit}>
            Signup
          </SignupButton>
        </SignupButtonWrapper>
      </SignupContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  min-height: 100vh;
`;

const SignupContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 420px;
  height: 40rem;
  gap: 1rem;
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
  padding: 2rem;
  box-shadow: 5px 5px 1px #f5e8dd;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SignupButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SignupButton = styled.button`
  background-color: #ddba9d;
  font-size: 14px;
  color: #fff;
  padding: 0.1rem 1rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 40px;
  top: 10px;

  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
  }
`;

const WriteButton = styled.button`
  background-color: ${({ active }) => (active ? '#ce8e5b' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#ce8e5b')};
  border: ${({ active }) => (active ? 'none' : '1px solid #ce8e5b')};
  padding: 0.8rem 2rem;
  border-radius: 0.3rem;
  margin-right: 2rem;
  cursor: pointer;
  box-shadow: 5px 5px 1px #f5e8dd;
  width: 9rem;

  &:hover {
    opacity: 0.6;
  }
`;

const UserButton = styled.button`
  background-color: ${({ active }) => (active ? '#ce8e5b' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#ce8e5b')};
  border: ${({ active }) => (active ? 'none' : '1px solid #ce8e5b')};
  padding: 0.8rem 2rem;
  border-radius: 0.3rem;
  margin-right: 0rem;
  cursor: pointer;
  box-shadow: 5px 5px 1px #f5e8dd;
  width: 9rem;

  &:hover {
    opacity: 0.6;
  }
`;

export default Signup;
