import styled, { css } from 'styled-components';
import mainlogo from 'assets/Main_logo.png';
import InputComponent from 'component/InputComponent';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from 'page/atom';
import { useEffect } from 'react';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    const isLoggedInValue = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedInValue);
  }, [setIsLoggedIn]);

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickSignup = () => {
    navigate('/Signup');
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://3.37.139.165/logout');
      localStorage.removeItem('authorization');
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
      console.log('로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  return (
    <StyledHeaderArea>
      <StyledContainer>
        <StyledLogo src={mainlogo} width={110} alt="logo" onClick={handleClickLogo} />
        <StyledInputContainer>
          <InputComponent placeholder="검색" />
        </StyledInputContainer>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>로그아웃</Button>
        ) : (
          <>
            <Button onClick={handleClickLogin}>로그인</Button>
            <Button onClick={handleClickSignup}>회원가입</Button>
          </>
        )}
      </StyledContainer>
    </StyledHeaderArea>
  );
}

const StyledHeaderArea = styled.div`
  width: 100%;
  justify-content: center;
  ${theme => {
    console.log(theme);
    return css`
      display: grid;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 5rem;
      z-index: 2;
      border-bottom: 1px solid #000;
      background-color: #fff;
    `;
  }}
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.25rem;
  max-width: 80rem;
  max-height: 100%;
  align-items: center;
`;

const StyledLogo = styled.img`
  display: grid;
  grid-column: 1 / span 1;
  cursor: pointer;
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-column: 5 / span 6;
  max-height: 100%;
  cursor: text;
`;

const Button = styled.button`
  background-color: #ddba9d;
  font-size: 14px;
  color: #000;
  padding: 0.1rem 1rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  position: relative;
  width: 100px;
  height: 40px;

  box-shadow: 5px 5px 1px #f5e8dd;

  &:hover {
    background-color: #ce8e5b;
  }
`;

export default Header;
