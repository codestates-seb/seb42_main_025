import styled, { css } from 'styled-components';
import Title from './Title';
import PatchButton from 'component/Buttons/PatchButton';

const S_Container = styled.aside`
  ${({ theme }) => {
    const lighterGray = theme.themeColor.lighterGray;
    const lightGray = theme.themeColor.lightGray;
    const darkGray = theme.themeColor.darkGray;
    return css`
      display: grid;
      align-content: start;

      > .title__container {
        display: grid;
      }

      > .detail__container {
        display: grid;
        border: 1px solid ${lighterGray};
        padding: 2rem;
        box-shadow: 1px 1px 10px 1px ${lightGray};
        gap: 2rem;

        > .image__wrapper {
          display: grid;
          justify-content: center;

          > .trade-img {
            border-radius: 50%;
          }
        }

        > .name__wrapper {
          font-weight: bold;
          font-size: 24px;
          color: ${darkGray};
        }

        > .content__wrapper {
          color: ${darkGray};
        }
      }
    `;
  }}
`;

function Profile({ profile }) {
  return (
    <S_Container>
      <div className="title__container">
        <Title title="프로필" color="#fff" />
      </div>
      <div className="detail__container">
        <PatchButton value="수정" />
        <div className="image__wrapper">
          <img
            className="trade-img"
            width={250}
            height={250}
            src={require('../../assets/shoes1.jpg')}
            alt="thumb"
          />
        </div>
        <div className="name__wrapper">{profile.name}</div>
        <div className="content__wrapper">{profile.content}</div>
      </div>
    </S_Container>
  );
}

export default Profile;
