import styled from 'styled-components';
import ComponentBox from 'component/ComponentBox';

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
      <ComponentBox mode={'AUTHOR_COMMISSION_LIST'} info={info} />
      <div>COMMISSION_SUB</div>
      <ComponentBox mode={'COMMISSION_SUB'} info={info} />
      <div>REVIEW_LIST</div>
      <ComponentBox mode={'REVIEW_LIST'} info={info} />
      <div>CHAT_LIST</div>
      <ComponentBox mode={'CHAT_LIST'} info={info} />
      <div>CHAT_COMMISSION_SUB</div>
      <ComponentBox mode={'CHAT_COMMISSION_SUB'} info={info} />
      <div>CHAT_COMMISSION_INFO</div>
      <ComponentBox mode={'CHAT_COMMISSION_INFO'} info={info} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
`;

export default ComponentBoxesExamples;
