import styled, { css } from 'styled-components';
import mainlogo from 'assets/Main_logo.png';
import InputComponent from 'component/InputComponent';
import Button from 'component/Buttons/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate('/');
  };
  return (
    <StyledHeaderArea>
      <StyledContainer>
        <StyledLogo src={mainlogo} width={110} alt="logo" onClick={handleClickLogo} />
        <StyledInputContainer>
          <InputComponent placeholder="검색" />
        </StyledInputContainer>
        <Button
          text="로그인"
          path="/login"
          addStyle={{
            width: '5rem',
            height: '2rem',
            fontSize: '1rem',
            backgroundColor: 'transparent',
          }}
        />
        <Button
          text="회원가입"
          path="/signup"
          addStyle={{
            width: '5rem',
            height: '2rem',
            fontSize: '1rem',
            backgroundColor: 'transparent',
          }}
        />
      </StyledContainer>
    </StyledHeaderArea>
  );
}

const StyledHeaderArea = styled.div`
  justify-content: center;
  ${theme => {
    console.log(theme);
    return css`
      display: grid;
      position: fixed;
      top: 0;
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

export default Header;
