import styled from 'styled-components';
import mainLogo from 'assets/Main_logo.png';
import InputComponent from 'Components/InputComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'Components/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const isLogined = localStorage.getItem('authorization') ? true : false;

  const navigate = useNavigate();

  const handleClickLogo = () => {
    window.location.replace('/');
  };
  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickSignUp = () => {
    navigate('/signup');
  };

  const handledClickMember = () => {
    const memberId = localStorage.getItem('memberId');
    window.location.href = `/mypage/${memberId}`;
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://3.37.139.165:8080/logout');
      localStorage.removeItem('authorization');
      localStorage.removeItem('memberId');
      console.log('로그아웃 되었습니다.');
      window.location.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledHeaderArea>
      <StyledContainer>
        <StyledLogo src={mainLogo} width={110} alt="logo" onClick={handleClickLogo} />
        <StyledInputContainer>
          <InputComponent placeholder="검색" />
        </StyledInputContainer>
        {isLogined ? (
          <>
            <StyledYour onClick={handledClickMember}>
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </StyledYour>
            <Button
              text="로그아웃"
              handleClick={handleLogout}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 2rem 0 0',
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
              handleClick={handleClickSignUp}
              addStyle={{
                width: 'w_m',
                height: 'h_xxs',
                margin: '0 2rem 0 0',
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

const StyledYour = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-self: center;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Header;
