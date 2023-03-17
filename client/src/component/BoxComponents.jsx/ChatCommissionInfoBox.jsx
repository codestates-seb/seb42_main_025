import styled from 'styled-components';

function ChatCommissionInfoBox({ info }) {
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
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  max-width: 12.25rem;
  max-height: fit-content;
  gap: 1.5rem;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: fit-content;
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  align-self: center;
`;

const StyledTitle = styled.h2`
  grid-column: 1 / span 1;
  grid-row: 5 / span 1;
  max-height: fit-content;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledContent = styled.div`
  grid-column: 1 / span 1;
  grid-row: 6 / span 1;
  max-height: fit-content;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

export default ChatCommissionInfoBox;
