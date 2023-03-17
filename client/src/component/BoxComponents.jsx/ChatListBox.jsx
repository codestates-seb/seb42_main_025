import styled from 'styled-components';

function ChatListBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <StyledContent>{info.content}</StyledContent>
      <StyledWriter>{info.writer}</StyledWriter>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 30rem;
  max-height: 5rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 4rem;
  max-height: 4rem;
  grid-column: 1 / span 1;
  grid-row: 1 / span 4;
  align-self: center;
`;

const StyledContent = styled.div`
  grid-column: 2 / span 5;
  grid-row: 3 / span 2;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

const StyledWriter = styled.div`
  display: grid;
  grid-column: 2 / span 5;
  grid-row: 1 / span 2;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

export default ChatListBox;
