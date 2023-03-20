import styled from 'styled-components';
import Button from 'component/Buttons/Button';
import { CommissionRequestBox } from 'component/BoxComponents.jsx';

function CommissionRequest() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
  };

  // const editorInitialValue = '내용을 입력하세요.';

  return (
    <Container>
      <div>COMMISSION_SUB</div>
      <CommissionRequestBox info={info} />
      <AdBox>
        <AdLink href="https://picsum.photos/1280/180" target="_blank">
          <AdImage src="https://picsum.photos/1280/180" alt="Ad Image" />
        </AdLink>
      </AdBox>
      <TitleLabel>제목</TitleLabel>
      <TitleInput type="text" placeholder="제목을 입력하세요." />
      <FormBox>
        {/* <Editor
          height="496px"
          initialValue={editorInitialValue}
          viewer={true}
          initialEditType="wysiwyg"
          usageStatistics={false}
        /> */}
      </FormBox>
      <Button
        type="submit"
        text="신청하기"
        // onClick={handleSubmit}
        addStyle={{ width: '53%', height: '40px' }}
      ></Button>
      <FormSpacer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 5rem;
  align-items: center;
  justify-items: center;
  position: relative;
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
  width: 53%;
  height: 100%;
  margin-top: -7rem;
`;

const FormSpacer = styled.div`
  margin-top: 25rem;
`;

const TitleLabel = styled.label`
  font-size: 1rem;
  width: 53%;
  margin-top: 5rem;
  margin-bottom: -13rem;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  width: 53%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #dadde6;
  margin-top: 5rem;
`;

export default CommissionRequest;
