import styled from 'styled-components';
import {
  CommissionListBox,
  CommissionRequestBox,
  ChatCommissionInfoBox,
  ReviewListBox,
  ChatListBox,
  ChatCommissionRequestBox,
  ProgressRequestListBox,
} from 'component/BoxComponents.jsx';

function ComponentBoxesExamples() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
    subtitle: 'subtitle',
    writer: 'writer',
    date: 'date',
  };

  return (
    <Container>
      <div>AUTHOR_COMMISSION_LIST</div>
      <CommissionListBox info={info} />
      <div>COMMISSION_SUB</div>
      <CommissionRequestBox info={info} />
      <div>REVIEW_LIST</div>
      <ReviewListBox info={info} />
      <div>CHAT_LIST</div>
      <ChatListBox info={info} />
      <div>CHAT_COMMISSION_SUB</div>
      <ChatCommissionRequestBox info={info} />
      <div>CHAT_COMMISSION_INFO</div>
      <ChatCommissionInfoBox info={info} />
      <div>PROGRESS_SUB-LIST</div>
      <ProgressRequestListBox info={info} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;

export default ComponentBoxesExamples;
