import styled from 'styled-components';
import { Container } from 'container/Container';
import ComponentBox from 'component/ComponentBox';
import TitleComponent from 'component/Text/TitleComponent';
import ChatListModule from './module/chatList/ChatListModule';
import ChatContentModule from './module/chatContent/ChatContentModule';

function ChatPage() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '커미션 제목',
    content: '커미션 내용',
  };
  return (
    <Container>
      <StyledContents>
        <TitleComponent title="대화 목록" fontSize="1.5rem" column="1 / span 3" />
        <TitleComponent title="대화 내용" fontSize="1.5rem" column="4 / span 6" />
        <TitleComponent title="커미션 정보" fontSize="1.5rem" column="11 / span 2" />
        <ChatListModule />
        <ChatContentModule />
        <StyledCommissionInfo>
          <ComponentBox mode="CHAT_COMMISSION_INFO" info={info} />
        </StyledCommissionInfo>
      </StyledContents>
    </Container>
  );
}

const StyledContents = styled.section`
  display: grid;
  max-width: 1280px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(2rem, auto);
  gap: 2rem;
`;

const StyledCommissionInfo = styled.aside`
  grid-column: 11 / span 2;
  grid-row: 2 / span 1;
  padding: 1rem 1rem;
  border: 1px solid #000;
`;

export default ChatPage;
