import PatchButton from 'component/Buttons/PatchButton';
import styled, { css } from 'styled-components';
import HeaderButton from 'component/Buttons/HeaderButton';

const S_Container = styled.ul`
  ${({ theme }) => {
    const darkGray = theme.themeColor.darkGray;
    const lightGray = theme.themeColor.lightGray;
    return css`
      display: grid;
      width: 90%;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid ${lightGray};
      font-size: 14px;
      color: ${darkGray};

      > .list__container {
        margin-bottom: 1rem;
        > .list {
          display: grid;
          grid-template-columns: 1fr 8fr 19fr;
          align-items: center;
          padding: 0.5rem 0;
          border-radius: 5px;
          border: 1px solid ${lightGray};
          background-color: #fff;

          > .list-status {
            display: grid;
            justify-content: center;
          }

          > .trade-information {
            padding-right: 1rem;

            > .trade-title {
              display: -webkit-box;
              word-wrap: break-word;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: bold;
              color: ${darkGray};
              margin-bottom: 5px;
            }

            > .trade-img__wrapper {
              display: flex;
              max-width: fit-content;
              gap: 0.5rem;
            }
          }

          > .application-list__container {
            display: grid;
            grid-template-rows: auto;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-left: 1px solid ${lightGray};

            > .list-name-createAt__wrapper {
              display: flex;
              justify-content: end;
              color: ${lightGray};

              > .list-name {
                font-weight: bold;
                padding-right: 1rem;
              }

              > .list-createAt {
              }
            }

            > .list-title {
              display: -webkit-box;
              word-wrap: break-word;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 70%;
              font-weight: bold;
            }

            > .list-content {
              display: -webkit-box;
              word-wrap: break-word;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        > .yesOrNo-buttons__container {
          display: flex;
          justify-content: end;

          > .yesOrNo-buttons {
            margin: 0.5rem 0.5rem 0 0;
          }
        }
      }
    `;
  }}
`;

function ProgressListBox({ list, isClickTitle, groups, clickName, handleTitleClick }) {
  let limit = 3;
  if (isClickTitle && groups === clickName) {
    limit = list.length;
  }
  return (
    <S_Container className={groups}>
      {list.map(
        (el, idx) =>
          idx < limit && (
            <li className="list__container" key={idx}>
              <div className="list">
                <div className="list-status">.</div>
                <div className="trade-information">
                  <div className="trade-title">{el.tradeTitle}</div>
                  <div className="trade-img__wrapper">
                    <img
                      className="trade-img"
                      width="60"
                      height="45"
                      src={require('../../assets/shoes1.jpg')}
                      alt="thumb"
                    />
                    <img
                      className="trade-img"
                      width="60"
                      height="45"
                      src={require('../../assets/shoes1.jpg')}
                      alt="thumb"
                    />
                    <img
                      className="trade-img"
                      width="60"
                      height="45"
                      src={require('../../assets/shoes1.jpg')}
                      alt="thumb"
                    />
                  </div>
                </div>
                <div className="application-list__container">
                  <div className="list-name-createAt__wrapper">
                    <div className="list-name">{el.name}</div>
                    <div className="list-createAt">{el.createAt}</div>
                  </div>
                  <div className="list-title">{el.title}</div>
                  <div className="list-content">{el.content}</div>
                </div>
              </div>
              {groups === 'applicaions' && (
                <div className="yesOrNo-buttons__container">
                  <div className="yesOrNo-buttons">
                    <PatchButton value="수락" />
                  </div>
                  <div className="yesOrNo-buttons">
                    <PatchButton value="거절" />
                  </div>
                </div>
              )}
            </li>
          )
      )}
      {list.length > 2 && (
        <HeaderButton
          value={isClickTitle ? '줄이기' : '더보기'}
          onClick={handleTitleClick}
          name={groups}
        />
      )}
    </S_Container>
  );
}

export default ProgressListBox;
