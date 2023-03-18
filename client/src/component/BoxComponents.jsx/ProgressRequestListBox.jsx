import styled from 'styled-components';

function ProgressRequestListBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledTitle>{info.title}</StyledTitle>
      <StyledContent>{info.content}</StyledContent>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-width: 25rem;
  max-height: 4rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;

  white-space: nowrap;
`;

const StyledTitle = styled.h2`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  max-height: fit-content;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledContent = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  max-height: fit-content;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

export default ProgressRequestListBox;
