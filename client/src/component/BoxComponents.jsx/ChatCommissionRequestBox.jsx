import styled from 'styled-components';

function ChatCommissionRequestBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <StyledTitle>{info.title}</StyledTitle>
      <StyledContent>{info.content}</StyledContent>
      <StyledSubtitle>{info.subtitle}</StyledSubtitle>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 21rem;
  max-height: 7.5rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border-radius: 4px;
  border: 1px solid #000;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 6rem;
  max-height: 3.75rem;
  grid-column: 1 / span 1;
  grid-row: 2 / span 3;
  align-self: center;
`;

const StyledTitle = styled.h2`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledContent = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2 / span 3;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

const StyledSubtitle = styled.div`
  display: grid;
  grid-column: 1 / span 1;
  grid-column: 2 / span 4;
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ChatCommissionRequestBox;
