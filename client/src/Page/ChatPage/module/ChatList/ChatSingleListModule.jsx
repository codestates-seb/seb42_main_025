import StateComponent from 'Components/StateComponent';
import Typography from 'Components/Typography';
import styled from 'styled-components';

function ChatSingleListModule() {
  return (
    <StyledChatList>
      <StateComponent state="blue" />
      <ChatInfoContainer>
        <Typography text="이름" bold="bold" line={1} />
        <Typography text="최근 채팅" line={1} />
      </ChatInfoContainer>
      <Typography size="s" text="2023-03-15" bold="bold" color="gray_3" flex={1} />
    </StyledChatList>
  );
}

const StyledChatList = styled.li`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  list-style: none;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0 #999999;
`;

const ChatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 2;
`;

export default ChatSingleListModule;
