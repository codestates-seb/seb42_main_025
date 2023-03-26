import styled from 'styled-components';
import Typography from 'Components/Typography';
import ChatListModule from './ChatListModule';

function ChatModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    content: '채팅 내용',
    writer: '채팅 상대',
  };
  return (
    <StyledContainer>
      <Typography
        variant="h2"
        text="채팅목록"
        size="xl"
        bold="bold"
        space="nowrap"
        color="tea_2"
        padding="m"
      />
      <StyledChatListBoxContainer>
        <ChatListModule info={info} />
        <ChatListModule info={info} />
        <ChatListModule info={info} />
      </StyledChatListBoxContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-column: 8 / span 5;
`;

const StyledChatListBoxContainer = styled.div`
  padding: 2rem;
  gap: 1rem;
  background-color: #ececec;
`;

export default ChatModule;
