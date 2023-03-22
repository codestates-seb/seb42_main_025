import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import axios from 'axios';
import Button from 'component/Buttons/Button';

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
      const response = await axios.post('https://f420-175-120-25-236.jp.ngrok.io/members/sign-up', {
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
    <StyeldContainer>
      <Container>
        <SignupContainer>
          <OptionContainer>
            <OptionButton active={userType === 'writer'} onClick={() => setUserType('writer')}>
              Writer
            </OptionButton>
            <OptionButton active={userType === 'user'} onClick={() => setUserType('user')}>
              User
            </OptionButton>
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
          <Button
            text="회원가입"
            buttonType="submit"
            handleClick={handleSubmit}
            addStyle={{ width: 'w_xxxxl', height: 'h_l', backgroundColor: 'tea_1', color: 'white' }}
          />
        </SignupContainer>
      </Container>
    </StyeldContainer>
  );
};

const StyeldContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #f6f6f6;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 420px;
  min-height: 100vh;
  padding: 10rem 0.5rem 5rem 0.5rem;
  overflow-x: hidden;
`;

const SignupContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 420px;
  height: 40rem;
  gap: 1rem;
  border: 1px solid #ce8e5b;
  box-shadow: 5px 5px 1px #f5e8dd;
  border-radius: 0.25rem;
  padding: 2rem;
  background-color: #fff;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 1rem;
`;

const OptionButton = styled.button`
  background-color: ${({ active }) => (active ? '#ce8e5b' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#ce8e5b')};
  border: ${({ active }) => (active ? 'none' : '1px solid #ce8e5b')};
  padding: 0.8rem 2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    opacity: 0.6;
  }
`;

export default Signup;
