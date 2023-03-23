import styled from 'styled-components';
import mainlogo from 'assets/Main_logo.png';
import InputComponent from 'component/InputComponent';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState, currentMemberId } from 'state';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'component/Button';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [memberId] = useRecoilState(currentMemberId);

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

  const handledClickMember = () => {
    navigate(`/mypage/${memberId}`);
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
            <StyledMypage onClick={handledClickMember}>
              <img
                src="https://fastly.picsum.photos/id/905/600/600.jpg?hmac=DvIKicBZ45DEZoZFwdZ62VbmaCwkK4Sv7rwYzUvwweU"
                alt="profile"
                width={40}
              />
            </StyledMypage>
            <Button
              text="로그아웃"
              handleClick={handleLogout}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 1rem 0 0',
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
                color: 'tea_2',
                fontSize: 'm',
                backgroundColor: 'transparent',
              }}
            />
            <Button
              text="회원가입"
              handleClick={handleClickSignup}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 1rem 0 0',
                fontSize: 'm',
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
  border-bottom: 1px solid #cecece;
  box-shadow: 0 0 5px 0 #999999;
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

const StyledMypage = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  justify-self: center;
  border: none;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Header;
