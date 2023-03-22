import styled from 'styled-components';
import Typography from 'component/Text/Typography';
import ChatListModule from './ChatListModule';

function ChatModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    content: '채팅 내용',
    writer: '채팅 상대',
  };
  return (
    <StyledContainer>
      <TitleContainer>
        <Typography
          variant="h2"
          text="채팅목록"
          size="xl"
          bold="bold"
          space="nowrap"
          color="tea_2"
          margin="s"
          height="h_s"
          row="5 / span 1"
        />
      </TitleContainer>
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

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  /* grid-column: 9 / span 1; */ // 유저
  grid-row: 5 / span 1;
`;

const StyledChatListBoxContainer = styled.div`
  /* grid-column: 9 / span 4; */ // 유저
  padding: 2rem;
  gap: 1rem;
  grid-template-rows: repeat(4, max(fit-content));
  background-color: #ececec;
`;

export default ChatModule;
