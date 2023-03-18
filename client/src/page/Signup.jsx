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
      const response = await axios.post('https://8029-175-120-25-236.jp.ngrok.io/members/sign-up', {
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
          <div>
            <OptionButton active={userType === 'writer'} onClick={() => setUserType('writer')}>
              Writer
            </OptionButton>
            <OptionButton active={userType === 'user'} onClick={() => setUserType('user')}>
              User
            </OptionButton>
          </div>
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
        <SignupButton type="submit" onClick={handleSubmit}>
          Signup
        </SignupButton>
      </SignupContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
`;

const SignupContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto auto auto auto;
  gap: 10px;
  width: 350px;
  height: 550px;
  border: 2px solid #ddba9d;
  border-radius: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 1px #f5e8dd;
  padding: 32px 32px 32px 32px;
`;

const OptionContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  bottom: 10px;
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
  width: 337px;
  height: 40px;
  top: 10px;

  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
  }
`;

const OptionButton = styled.button`
  background-color: ${({ active }) => (active ? '#DDBA9D' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#DDBA9D')};
  border: ${({ active }) => (active ? 'none' : '1px solid #DDBA9D')};
  padding: 0.8rem 2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-right: 3rem;
  position: relative;
  left: 25px;
  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
    color: #fff;
  }
`;
