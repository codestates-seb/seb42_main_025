import styled from 'styled-components';
import ChatSingleListModule from './ChatSingleListModule';

function ChatListModule() {
  return (
    <StyledContainer>
      <ChatSingleListModulesContainer>
        <ChatSingleListModule />
        <ChatSingleListModule />
      </ChatSingleListModulesContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
  border-right: 1px solid #cecece;
`;

const ChatSingleListModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 1rem 1.5rem 1rem;
  background-color: #ddba9d;
  border-radius: 0.5rem;
`;

export default ChatListModule;
