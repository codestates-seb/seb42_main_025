import styled from 'styled-components';

function ReviewListBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <StyledContent>{info.content}</StyledContent>
      <StyledWriter>{info.writer}</StyledWriter>
      <StyledDate>{info.date}</StyledDate>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 72rem;
  max-height: 5rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border-radius: 4px;
  border: 1px solid #000;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 4rem;
  max-height: 4rem;
  grid-column: 1 / span 2;
  grid-row: 1 / span 4;
  align-self: center;
`;

const StyledContent = styled.div`
  grid-column: 2 / span 8;
  grid-row: 1 / span 4;
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  border-left: 1px solid #000;
`;

const StyledWriter = styled.div`
  display: grid;
  grid-column: 11 / span 1;
  grid-row: 1 / span 4;
`;

const StyledDate = styled.div`
  display: grid;
  grid-column: 12 / span 1;
  grid-row: 1 / span 4;
`;

export default ReviewListBox;
