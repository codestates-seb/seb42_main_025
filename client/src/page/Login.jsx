import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from './atom';
import mainlogo from 'assets/Main_logo.png';
import Button from 'component/Buttons/Button';

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

      // console.log(response.headers); // 콘솔에 응답헤더부분 토큰 확인
      // console.log(response.config.data); // 콘솔창에 아이디 비번 확인

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
    <StyeldContainer>
      <Container>
        <LoginContainer>
          <StyledLogo src={mainlogo} width={110} alt="logo" />
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

          <Button
            text="로그인"
            buttonType="submit"
            handleClick={handleSubmit}
            addStyle={{
              percent: 'w_xxxxl',
              height: 'h_l',
              backgroundColor: 'tea_1',
              color: 'white',
            }}
          />
        </LoginContainer>
      </Container>
    </StyeldContainer>
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

const LoginContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 420px;
  height: 40rem;
  gap: 1rem;
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 1px #f5e8dd;
  padding: 2rem;
  background-color: #fff;
`;

const StyledLogo = styled.img`
  display: flex;
  justify-self: center;
  width: 150px;
`;

export default Login;
