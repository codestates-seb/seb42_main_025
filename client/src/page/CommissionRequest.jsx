import styled from 'styled-components';
import Button from 'component/Buttons/Button';
import { CommissionRequestBox } from 'component/BoxComponents.jsx';
import TextEditor from 'component/Editor';

function CommissionRequest() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
  };

  // const editorInitialValue = '내용을 입력하세요.';

  return (
    <Container>
      <CommissionRequestBox info={info} />
      <TitleLabel>제목</TitleLabel>
      <TitleInput type="text" placeholder="제목을 입력하세요." />
      <TextEditor editorHeight={'25rem'} />
      <Button
        type="submit"
        text="신청하기"
        // onClick={handleSubmit}
        addStyle={{ width: 'half', height: 'h_s', backgroundColor: '#F0D8BA' }}
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
  margin-top: 10rem;
`;

const FormSpacer = styled.div`
  margin-top: 25rem;
`;

const TitleLabel = styled.label`
  font-size: 1rem;
  width: 53%;
  margin-top: 5rem;
  margin-bottom: -13rem;
  justify-self: start;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  width: 100%;
  margin-bottom: -3rem;
  padding: 0.5rem;
  border: 1px solid #dadde6;
  margin-top: 5rem;
`;

export default CommissionRequest;
