import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';

const Container = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
`;

const LoginContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto auto;
  gap: 16px;
  width: 330px;
  height: 300px;
  border: 2px solid #ddba9d;
  border-radius: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 1px #f5e8dd;
  padding: 50px 32px 32px 32px;
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
  top: 20px;

  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
  }
`;

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

  const handleSubmit = event => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    navigate('/');
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Login;
