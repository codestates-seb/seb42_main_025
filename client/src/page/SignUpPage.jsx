import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'Components/InputComponent';
import Button from 'Components/Button';
import { emailValidate, passwordValidate, nicknameValidate } from '../utils/validata';
import { signup } from '../apis/api/signup';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [nickname, setNickname] = useState('');
  const [NicknameError, setNicknameError] = useState('');

  const [userType, setUserType] = useState('writer');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const roles = userType === 'writer' ? ['AUTHOR'] : ['USER'];
    console.log(roles);
    try {
      const result = await signup({ email, password, nickname, roles }); // signup 함수 사용
      if (result.success) {
        console.log('회원가입 성공!');
        navigate('/Login');
      } else {
        console.log('회원가입 실패!');
        console.log(result.message);
      }
    } catch (error) {
      console.log('회원가입 실패!');
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isEmailValid = emailValidate(email, setEmailError);
    const isPasswordValid = passwordValidate(password, setPasswordError);
    const isNicknameValid = nicknameValidate(nickname, setNicknameError);

    if (!isEmailValid || !isPasswordValid || !isNicknameValid) {
      return;
    }

    handleSignUp();
  };

  return (
    <StyledContainer>
      <Container>
        <SignUpContainer>
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
          <InputComponent
            label="Nickname"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            onBlur={() => nicknameValidate(nickname, setNicknameError)}
            error={NicknameError}
          />
          <Button
            text="회원가입"
            buttonType="submit"
            handleClick={handleSubmit}
            addStyle={{ width: 'w_xxxxl', height: 'h_l', backgroundColor: 'tea_1', color: 'white' }}
          />
        </SignUpContainer>
      </Container>
    </StyledContainer>
  );
};

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

const SignUpContainer = styled.div`
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

export default SignUpPage;
