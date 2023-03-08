import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HeaderButton from 'component/Buttons/HeaderButton';
import { ReactComponent as MainLogo } from 'assets/mainlogo.svg';
import { ImSearch } from 'react-icons/im';

const S_container = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #c1c1c1;

  > .header__container {
    display: flex;
    width: 1280px;
    align-items: center;

    > .logo__wrapper {
      display: flex;
      flex: 1;
      justify-content: center;

      > .logo {
        display: flex;
        height: fit-content;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }

    > .header-input__Container {
      display: flex;
      flex: 8;
      justify-content: end;
      margin: 0 2rem;

      > .header-input__Wrapper {
        display: flex;
        width: 40%;
        flex-direction: row;
        padding: 0.4rem 0.6rem;
        border-radius: 5px;
        border: 1px solid #c1c1c1;

        > .header-input {
          width: 100%;
          border: none;
          outline: none;

          ::placeholder {
            color: #c1c1c1;
          }
        }

        > .header-input__logo {
          color: #c1c1c1;
        }
      }
    }

    > .button__wrapper {
      display: flex;
      flex-direction: row;
      flex: 2;
      justify-content: space-around;
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleClickSignup = () => {
    navigate('/Signup');
  };

  const handleClickLogin = () => {
    navigate('/Login');
  };

  return (
    <S_container>
      <header className="header__container">
        <div className="logo__wrapper">
          <button className="logo" onClick={handleClickLogo}>
            <MainLogo width={100} height={70} />
          </button>
        </div>
        <label className="header-input__Container">
          <form className="header-input__Wrapper">
            <input className="header-input" placeholder="검색어를 입력하세요"></input>
            <ImSearch className="header-input__logo" />
          </form>
        </label>
        <div className="button__wrapper">
          <HeaderButton value="로그인" onClick={handleClickLogin} />
          <HeaderButton value="회원가입" onClick={handleClickSignup} />
        </div>
      </header>
    </S_container>
  );
}

export default Header;
