import styled from 'styled-components';
import ChatSingleListModule from './ChatSingleListModule';

function ChatListModule() {
  return (
    <StyledContainer>
      <ChatSingleListModule />
      <ChatSingleListModule />
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 0.5rem;
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
  border-right: 1px solid #cecece;
`;

export default ChatListModule;
