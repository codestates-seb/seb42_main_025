import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HeaderButton from 'component/Buttons/HeaderButton';
// import { ReactComponent as MainLogo } from 'assets/mainlogo.svg';
import mainlogo from 'assets/Main_logo.png';
// import { ReactComponent as Favicon } from 'assets/MBTfavicon.svg';
import { ImSearch } from 'react-icons/im';

const S_Container = styled.div`
  ${({ theme }) => {
    const lightGray = theme.themeColor.lightGray;
    return css`
      display: flex;
      position: fixed;
      height: 70px;
      width: 100%;
      z-index: 1;
      justify-content: center;
      border-bottom: 1px solid ${lightGray};
      background-color: #fff;
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
            border: 1px solid ${lightGray};
            :focus-within {
              border: 2px solid ${lightGray};
              box-shadow: 0px 1px 3px ${lightGray};
            }

            > .header-input {
              width: 100%;
              border: none;
              outline: none;

              ::placeholder {
                color: ${lightGray};
              }
            }

            > .header-input__logo {
              color: ${lightGray};
            }
          }
        }

        > .button__wrapper {
          display: flex;
          flex-direction: row;
          flex: 2;
          justify-content: space-around;
          /* 
          > .user-button {
            display: flex;
            width: 100%;
            padding: 0;
            align-items: center;
            border: none;
            background-color: transparent;
            cursor: pointer;
            :hover {
              filter: brightness(0.9);
            }
            :active {
              filter: brightness(0.8);
              transform: translate(0px, 1px);
            }
          } */
        }
      }
    `;
  }}
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
    <S_Container>
      <header className="header__container">
        <div className="logo__wrapper">
          <button className="logo" onClick={handleClickLogo}>
            <img src={mainlogo} width={110} alt="mainlogo" />
          </button>
        </div>
        <label className="header-input__Container">
          <form className="header-input__Wrapper">
            <input type="text" className="header-input" placeholder="검색어를 입력하세요"></input>
            <ImSearch className="header-input__logo" />
          </form>
        </label>
        <div className="button__wrapper">
          <HeaderButton value="로그인" onClick={handleClickLogin} />
          <HeaderButton value="회원가입" onClick={handleClickSignup} />
        </div>

        {/* <div className="button__wrapper">
          <button className="user-button">
            <Favicon width={35} height={35} />
          </button>
          <HeaderButton value="로그아웃" />
        </div> */}
      </header>
    </S_Container>
  );
}

export default Header;
