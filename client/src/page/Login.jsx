import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 460px;
  border: 2px solid #ddba9d;
  border-radius: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 1px #f5e8dd;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #f5e8dd;
  width: 240px;
  height: 40px;
  border-radius: 0.3rem;
  position: relative;
  bottom: 30px;
  text-align: left;
  border: 1px solid #ddba9d;
  box-shadow: 3px 3px 1px #ddba9d;
  border-color: ${({ borderColor }) => borderColor};

  input[type='email'],
  input[type='password'],
  input[type='text'] {
    text-align: left;
    background-color: #f5e8dd;
    padding: 0.76rem 1.2rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    color: #d58c51;
    border: none;
    position: relative;
    left: -10px;
  }
  &:focus-within {
    border-color: #ce8e5b;
    outline: none;
  }

  input::placeholder {
    color: #db9a65;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    color: #db9a65;
  }
`;

const LoginButton = styled.button`
  background-color: #ddba9d;
  font-size: 14px;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  position: relative;
  top: 35px;
  padding: 0.8rem 6.3rem;
  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('#ddba9d');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#ddba9d');

  const navigate = useNavigate();

  const validateEmail = value => {
    if (!value) {
      setEmailError('이메일을 입력해주세요.');
      setEmailBorderColor('red');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      setEmailBorderColor('red');
      return false;
    }
    setEmailError('');
    setEmailBorderColor('#ddba9d');
    return true;
  };

  const validatePassword = value => {
    if (!value) {
      setPasswordError('비밀번호를 입력해주세요.');
      setPasswordBorderColor('red');
      return false;
    }
    if (value.length < 8) {
      setPasswordError('비밀번호는 8자리 이상이어야 합니다.');
      setPasswordBorderColor('red');
      return false;
    }
    setPasswordError('');
    setPasswordBorderColor('#ddba9d');
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
        <InputContainer borderColor={emailBorderColor}>
          <label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
              placeholder="Email"
            />
          </label>
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputContainer>
        <InputContainer borderColor={passwordBorderColor}>
          <label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => validatePassword(password)}
              placeholder="Password"
            />
          </label>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </InputContainer>
        <LoginButton type="submit" onClick={handleSubmit}>
          Login
        </LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
