import styled from 'styled-components';
import { Container } from 'container/Container';
import { ChatCommissionInfoBox } from 'component/BoxComponents.jsx';
import Typography from 'component/Text/Typography';
import ChatListModule from './module/chatList/ChatListModule';
import ChatContentModule from './module/chatContent/ChatContentModule';

function ChatPage() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목커미션 제목',
    content:
      '커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용',
  };
  return (
    <Container>
      <StyledContents>
        <Typography
          text="대화 목록"
          size="xl"
          variant="h2"
          bold="bold"
          column="1 / span 3"
          margin="m"
          space="nowrap"
        />
        <Typography
          text="대화 내용"
          size="xl"
          variant="h2"
          bold="bold"
          column="4 / span 6"
          margin="m"
          space="nowrap"
        />
        <Typography
          text="커미션 정보"
          size="xl"
          variant="h2"
          bold="bold"
          column="11 / span 2"
          margin="m"
          space="nowrap"
        />
        <ChatListModule />
        <ChatContentModule />
        <StyledCommissionInfo>
          <ChatCommissionInfoBox info={info} />
        </StyledCommissionInfo>
      </StyledContents>
    </Container>
  );
}

const StyledContents = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(2rem, auto);
  gap: 1rem 0.5rem;
`;

const StyledCommissionInfo = styled.aside`
  width: 100%;
  grid-column: 11 / span 2;
  grid-row: 2 / span 1;
  padding: 1rem 0 0 1rem;
  border-left: 1px solid #cecece;
`;

export default ChatPage;
