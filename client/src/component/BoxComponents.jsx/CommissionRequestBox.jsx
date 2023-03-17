import styled from 'styled-components';

function CommissionRequestBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <StyledTitle>{info.title}</StyledTitle>
      <StyledContent>{info.content}</StyledContent>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 64rem;
  max-height: 13rem;
  padding: 1rem 2rem;
  column-gap: 2rem;
  row-gap: 1rem;
  border-radius: 4px;
  border: 1px solid #000;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 15rem;
  max-height: 11.25rem;
  grid-column: 1 / span 1;
  grid-row: 1 / span 4;
  align-self: center;
`;

const StyledTitle = styled.h2`
  grid-column: 2 / span 4;
  grid-row: 1 / span 1;
  font-size: 3rem;
  font-weight: bold;
`;

const StyledContent = styled.div`
  grid-column: 2 / span 4;
  grid-row: 2 / span 3;
  padding-left: 0.5rem;
  font-size: 1.5rem;
`;

export default CommissionRequestBox;
