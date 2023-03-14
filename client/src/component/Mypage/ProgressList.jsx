import styled, { css } from 'styled-components';
import ProgressListBox from './ProgressListBox';
import Title from './Title';
import { useState } from 'react';

const S_Container = styled.section`
  ${({ theme }) => {
    const lighterGray = theme.themeColor.lighterGray;
    const milkTeaTwo = theme.themeColor.milkTeaTwo;
    return css`
      display: grid;
      width: 100%;

      > .title__container {
        display: grid;
        width: 100%;
        justify-items: start;
      }

      > .list__container {
        display: grid;
        grid-template-rows: 1fr;
        padding: 2rem 0;
        justify-items: center;
        border-radius: 5px;
        background-color: ${lighterGray};

        > .list-header__container {
          display: flex;
          width: 85%;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-weight: bold;
          color: ${milkTeaTwo};
        }
      }
    `;
  }}
`;

function ProgressList({ list }) {
  const [isClickTitle, setIsClickTitle] = useState(false);
  const [isClassName, setIsClassName] = useState(null);

  const handleTitleClick = e => {
    setIsClickTitle(!isClickTitle);
    setIsClassName(e.target.className);
    console.log(e.target.className);
  };

  return (
    <S_Container>
      <div className="title__container">
        <Title title="진행 목록" />
      </div>
      <article className="list__container">
        <div className="list-header__container">
          <div className="list-header">신청의뢰</div>
          <div>{list.applicaions.length}</div>
        </div>
        <ProgressListBox
          list={list.applicaions}
          isClickTitle={isClickTitle}
          groups="applicaions"
          clickName={isClassName}
          handleTitleClick={handleTitleClick}
        />
        <div className="list-header__container">
          <div className="list-header">진행중</div>
          <div>{list.progress.length}</div>
        </div>
        <ProgressListBox
          list={list.progress}
          isClickTitle={isClickTitle}
          groups="progress"
          clickName={isClassName}
        />
        <div className="list-header__container">
          <div className="list-header">완료목록</div>
          <div>{list.complete.length}</div>
        </div>
        <ProgressListBox
          list={list.complete}
          isClickTitle={isClickTitle}
          groups="complete"
          clickName={isClassName}
          handleTitleClick={handleTitleClick}
        />
      </article>
    </S_Container>
  );
}

export default ProgressList;
