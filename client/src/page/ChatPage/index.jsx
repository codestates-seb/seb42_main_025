import styled from 'styled-components';
import { Container } from 'Container/Container';
import ChatCommissionInfoModule from './module/ChatCommissionInfoModule';
import ChatListModule from './module/ChatList/ChatListModule';
import ChatContentModule from './module/ChatContent/ChatContentModule';
function ChatPage() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목',
    content:
      '커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용',
  };
  return (
    <Container>
      <StyledContainer>
        <ChatListModule />
        <ChatContentModule />
        <StyledCommissionInfo>
          <ChatCommissionInfoModule info={info} />
        </StyledCommissionInfo>
      </StyledContainer>
    </Container>
  );
}

const StyledContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(2rem, auto);
  gap: 1rem 0.5rem;
`;

const StyledCommissionInfo = styled.aside`
  display: grid;
  width: 100%;
  grid-column: 11 / span 2;
  padding: 1rem 1rem 0 1rem;
  border-left: 1px solid #cecece;
`;

export default ChatPage;
