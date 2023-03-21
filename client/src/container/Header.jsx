import styled from 'styled-components';
import mainlogo from 'assets/Main_logo.png';
import InputComponent from 'component/InputComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from 'page/atom';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'component/Buttons/Button';

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
          <>
            <StyledLink to="/mypage/1">
              <img
                src="https://fastly.picsum.photos/id/905/600/600.jpg?hmac=DvIKicBZ45DEZoZFwdZ62VbmaCwkK4Sv7rwYzUvwweU"
                alt="profile"
                width={40}
              />
            </StyledLink>
            <Button
              text="로그아웃"
              handleClick={handleLogout}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 1rem',
                backgroundColor: 'transparent',
              }}
            />
          </>
        ) : (
          <>
            <Button
              text="로그인"
              handleClick={handleClickLogin}
              addStyle={{
                width: 'w_m',
                margin: '0 1rem',
                height: 'h_xxs',
                backgroundColor: 'transparent',
              }}
            />
            <Button
              text="회원가입"
              handleClick={handleClickSignup}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 1rem',
                backgroundColor: 'transparent',
              }}
            />
          </>
        )}
      </StyledContainer>
    </StyledHeaderArea>
  );
}

const StyledHeaderArea = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  height: 5rem;
  z-index: 10;
  border-bottom: 1px solid #000;
  background-color: #fff;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.25rem;
  max-width: 80rem;
  max-height: 100%;
  align-items: center;
  justify-items: end;
`;

const StyledLogo = styled.img`
  display: grid;
  grid-column: 1 / span 1;
  cursor: pointer;
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-column: 5 / span 6;
  width: 100%;
  max-height: 100%;
  cursor: text;
`;

const StyledLink = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  justify-self: center;
`;

export default Header;
