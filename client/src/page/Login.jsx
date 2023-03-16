import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import { Container } from 'container/Container';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://0bd5-175-120-25-236.jp.ngrok.io/login', {
        email,
        password,
      });
      console.log(response.data);
      localStorage.setItem('token', response.headers.authorization); // 서버에서 보내준 토큰을 로컬 스토리지에 저장
      console.log(localStorage.getItem('token')); // 저장된 토큰 값 확인
      console.log('로그인 성공!');
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
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

const Contents = styled.div`
  display: grid;
  width: 1280px;
  height: 100%;
  gap: 1rem;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: grid;
  width: 26rem;
  gap: 1rem;
  justify-items: center;
  align-items: center;
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
