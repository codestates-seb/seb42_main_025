import styled, { css } from 'styled-components';

function ComponentBox({ mode, info }) {
  return (
    <>
      <StyledSummaryBox mode={mode}>
        <StyledImg src={info.image} alt={info.title} />
        <StyledTitle>{info.title}</StyledTitle>
        <StyledContent>{info.content}</StyledContent>
        <StyledSubtitle>{info.subtitle}</StyledSubtitle>
        <StyledWriter>{info.writer}</StyledWriter>
        <StyledDate>{info.date}</StyledDate>
      </StyledSummaryBox>
    </>
  );
}

export default ComponentBox;

const StyledImg = styled.img`
  max-width: 6rem;
  max-height: 3.75rem;
  grid-column: 1 / span 1;
  grid-row: 2 / span 3;
  align-self: center;
`;

const StyledTitle = styled.h2`
  grid-column: 1 / span 4;
  grid-row: 1 / span 1;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledContent = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2 / span 3;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

const StyledSubtitle = styled.div`
  display: none;
`;

const StyledWriter = styled.div`
  display: none;
`;

const StyledDate = styled.div`
  display: none;
`;

const StyledSummaryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 20rem;
  max-height: 7.5rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border-radius: 4px;
  border: 1px solid #000;

  ${({ theme, mode }) => {
    console.log(theme);
    if (mode === 'AUTHOR_COMMISSION_LIST') {
      return;
    }

    if (mode === 'COMMISSION_SUB') {
      return css`
        max-width: 64rem;
        max-height: 13rem;
        padding: 1rem 2rem;
        column-gap: 2rem;
        row-gap: 1rem;

        ${StyledImg} {
          max-width: 15rem;
          max-height: 11.25rem;
          grid-column: 1 / span 1;
          grid-row: 1 / span 4;
          align-self: center;
        }

        ${StyledTitle} {
          grid-column: 2 / span 4;
          grid-row: 1 / span 1;
          font-size: 3rem;
        }

        ${StyledContent} {
          grid-column: 2 / span 4;
          grid-row: 2 / span 3;
          font-size: 1.5rem;
        }
      `;
    }

    if (mode === 'REVIEW_LIST') {
      return css`
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(4, 1fr);
        max-width: 72rem;
        max-height: 5rem;

        ${StyledImg} {
          max-width: 4rem;
          max-height: 4rem;
          grid-column: 1 / span 2;
          grid-row: 1 / span 4;
        }

        ${StyledTitle} {
          display: none;
        }

        ${StyledContent} {
          grid-column: 2 / span 8;
          grid-row: 1 / span 4;
          font-weight: bold;
          padding-left: 1rem;
          border-left: 1px solid #000;
        }

        ${StyledWriter} {
          display: grid;
          grid-column: 11 / span 1;
          grid-row: 1 / span 4;
        }

        ${StyledDate} {
          display: grid;
          grid-column: 12 / span 1;
          grid-row: 1 / span 4;
        }
      `;
    }
    if (mode === 'CHAT_LIST') {
      return css`
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
        max-width: 30rem;
        max-height: 5rem;
        border: 0;

        ${StyledImg} {
          max-width: 4rem;
          max-height: 4rem;
          grid-column: 1 / span 1;
          grid-row: 1 / span 4;
          align-self: center;
        }

        ${StyledWriter} {
          display: grid;
          grid-column: 2 / span 5;
          grid-row: 1 / span 2;
          padding-left: 0.5rem;
          font-size: 1rem;
        }

        ${StyledContent} {
          grid-column: 2 / span 5;
          grid-row: 3 / span 2;
          font-size: 1rem;
        }

        ${StyledTitle} {
          display: none;
        }
      `;
    }
    if (mode === 'CHAT_COMMISSION_SUB') {
      return css`
        ${StyledTitle} {
          grid-column: 1 / span 1;
        }

        ${StyledSubtitle} {
          display: grid;
          grid-column: 1 / span 1;
          grid-column: 2 / span 4;
          font-size: 1.5rem;
          font-weight: bold;
        }
      `;
    }
    if (mode === 'CHAT_COMMISSION_INFO') {
      return css`
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
        max-width: 12.25rem;
        max-height: fit-content;
        border: 0;
        padding: 0;

        ${StyledImg} {
          grid-column: 1 / span 1;
          grid-row: 1 / span 4;
          max-width: 12.25rem;
          max-height: fit-content;
        }

        ${StyledTitle} {
          grid-column: 1 / span 1;
          grid-row: 5 / span 1;
          max-height: fit-content;
        }

        ${StyledContent} {
          grid-column: 1 / span 1;
          grid-row: 6 / span 1;
          max-height: fit-content;
        }
      `;
    }
  }}
`;

// 모드: AUTHOR_COMMISSION_LIST, COMMISSION_SUB, REVIEW_LIST, CHAT_LIST, CHAT_COMMISSION_SUB, CHAT_COMMISSION_INFO
// 사용 예시: ComponentBoxesExamples.jsx 참고
