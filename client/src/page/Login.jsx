import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import { Container } from 'container/Container';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from './atom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const [, setIsLoggedIn] = useRecoilState(isLoggedInState);

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

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://3.37.139.165/login', {
        email,
        password,
      });

      // console.log(response.headers);

      localStorage.setItem('authorization', response.headers.get('authorization')); // 서버에서 보내준 토큰을 로컬 스토리지에 저장

      // const token = localStorage.getItem('authorization'); // 로컬 스토리지에서 토큰을 가져옴
      // console.log(token);
      setIsLoggedIn(true);
      console.log('로그인 성공!');
      navigate('/');
    } catch (error) {
      const response = error.response;
      if (response) {
        console.log(response.data);
      } else {
        console.log(error);
      }
      console.log('로그인 실패!');
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    handleLogin();
  };

  return (
    <Container>
      <Contents>
        <LoginContainer>
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
          <LoginButton type="submit" onClick={handleSubmit}>
            Login
          </LoginButton>
        </LoginContainer>
      </Contents>
    </Container>
  );
};

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authorization');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

const Contents = styled.div`
  display: grid;
  width: 1280px;
  min-height: 560px;
  gap: 1rem;
  align-self: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: grid;
  width: 26rem;
  gap: 1rem;
  justify-items: center;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 3rem 0;
`;

const LoginButton = styled.button`
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

export default Login;
