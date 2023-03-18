import styled from 'styled-components';
import ChatSingleListModule from './ChatSingleListModule';

function ChatListModule() {
  return (
    <StyledContainer>
      <ChatSingleListModule />
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: grid;
  padding: 0.5rem;
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
  border: 1px solid #000;
`;

export default ChatListModule;
