import styled from 'styled-components';
import ComponentBox from 'component/ComponentBox';

const Container = styled.div`
  display: grid;
  grid-gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const AdBox = styled.div`
  grid-row: 3;
  width: 1280px;
  height: 180px;
  border: 1px solid black;
`;

const AdImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const FormBox = styled.div`
  width: 1064px;
  height: 500px;
  border: 2px solid black;
`;

const FormSpacer = styled.div`
  margin-top: 5rem;
`;

function CommissionRequest() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
  };

  return (
    <Container>
      <div>COMMISSION_SUB</div>
      <ComponentBox mode={'COMMISSION_SUB'} info={info} />
      <AdBox>
        <AdLink href="https://picsum.photos/1280/180" target="_blank">
          <AdImage src="https://picsum.photos/1280/180" alt="Ad Image" />
        </AdLink>
      </AdBox>
      <FormBox>{/* 폼 요소 추가 */}</FormBox>
      <FormSpacer />
    </Container>
  );
}

export default CommissionRequest;
