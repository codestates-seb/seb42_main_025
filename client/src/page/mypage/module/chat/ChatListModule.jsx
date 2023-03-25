import styled from 'styled-components';
import Typography from 'component/Typography';
import ImageComponent from 'component/ImageComponent';

function ChatListModule({ info }) {
  return (
    <StyledSummaryBox>
      <ImageComponent src={info.image} alt={info.title} imgStyle="user" width="xs" />
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
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 #999999;
`;

const ContentContainer = styled.div``;

export default ChatListModule;
