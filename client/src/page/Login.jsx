import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from 'assets/Main_logo.png';
import InputComponent from 'component/InputComponent';
import Button from 'component/Button';
import { emailValidate, passwordValidate } from '../utils/validata';
import { login } from '../apis/api/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login({ email, password });
      if (result.success) {
        console.log('로그인 성공!');
        navigate('/');
      } else {
        console.log('로그인 실패!');
        console.log(result.message);
      }
    } catch (error) {
      console.log('로그인 실패!');
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const isEmailValid = emailValidate(email, setEmailError);
    const isPasswordValid = passwordValidate(password, setPasswordError);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    handleLogin();
  };

  return (
    <StyledContainer>
      <Container>
        <LoginContainer>
          <StyledLogo src={mainLogo} width={110} alt="logo" />
          <InputComponent
            label="Email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => emailValidate(email, setEmailError)}
            error={emailError}
          />
          <InputComponent
            label="Password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => passwordValidate(password, setPasswordError)}
            error={passwordError}
            type="password"
          />

          <Button
            text="로그인"
            buttonType="submit"
            handleClick={handleSubmit}
            addStyle={{
              width: 'w_xxxxl',
              height: 'h_l',
              backgroundColor: 'tea_1',
              color: 'white',
            }}
          />
        </LoginContainer>
      </Container>
    </StyledContainer>
  );
};

// axios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('authorization');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

const StyledContainer = styled.div`
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
