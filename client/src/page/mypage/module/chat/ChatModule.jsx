import styled from 'styled-components';
import TitleComponent from 'component/Text/TitleComponent';
import { ChatListBox } from 'component/BoxComponents.jsx';

function ChatModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    content: '채팅 내용',
    writer: '채팅 상대',
  };
  return (
    <>
      <StyledTitleContainer>
        <TitleComponent title="채팅 목록" fontSize={'1.5rem'} underbar={'yes'} />
      </StyledTitleContainer>
      <StyledContainer>
        <ChatListBox info={info} />
        <ChatListBox info={info} />
        <ChatListBox info={info} />
      </StyledContainer>
    </>
  );
}

const StyledTitleContainer = styled.div`
  display: grid;
  grid-column: 8 / span 1;
  /* grid-column: 9 / span 1; */ // 유저
  grid-row: 5 / span 1;
`;

const StyledContainer = styled.aside`
  display: grid;
  height: fit-content;
  grid-column: 8 / span 5;
  /* grid-column: 9 / span 4; */ // 유저
  padding: 1rem;
  border: 1px solid #000;
  grid-template-rows: repeat(4, max(fit-content));
  gap: 1rem;
`;

export default ChatModule;
