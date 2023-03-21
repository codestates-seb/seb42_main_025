import styled from 'styled-components';
import Typography from 'component/Text/Typography';

function ChatListBox({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <ContentContainer>
        <Typography text={info.writer} margin="xxs" line={1} bold="bold" />
        <Typography text={info.content} margin="xxs" line={1} />
      </ContentContainer>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 30rem;
  max-height: 5rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  white-space: nowrap;
  background-color: #fff;
  margin-bottom: 1rem;
`;

const StyledImg = styled.img`
  max-width: 4rem;
  max-height: 4rem;
  grid-column: 1 / span 1;
  grid-row: 1 / span 4;
  align-self: center;
`;

const ContentContainer = styled.div``;

export default ChatListBox;
