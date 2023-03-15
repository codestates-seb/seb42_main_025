import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import Button from 'component/Buttons/Button';
import { Container } from 'container/Container';

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
          <Button
            type="submit"
            text="로그인"
            onClick={handleSubmit}
            addStyle={{ width: '373px', height: '40px' }}
          ></Button>
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

export default Login;
