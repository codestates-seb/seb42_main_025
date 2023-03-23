import styled from 'styled-components';
// import InputComponent from 'component/InputComponent';
import Button from 'component/Button';
import Dropzone from './Dropzone';
import { Container } from 'container/Container';

function CreatePost() {
  return (
    <Container>
      <ContentBox>
        <Content>
          <ImgBox>
            <Dropzone />
          </ImgBox>
          <PostDetail>
            제목
            {/* <InputComponent /> */}
            <div>소개글 </div>
            tag
            {/* <InputComponent /> */}
          </PostDetail>
        </Content>
        <Toast>toast ui</Toast>
        <ButtonBox>
          <Button
            text="수정"
            path="/commission"
            addStyle={{
              padding: '0px',
              borderRadius: '10px',
              fontSize: '16px',
              width: '70px',
            }}
          />
        </ButtonBox>
      </ContentBox>
    </Container>
  );
}

const ContentBox = styled.div`
  min-width: 1280px;
  display: grid;
  grid-template-columns: repeat(
    12,
    minmax(auto, 92px)
  ); //repeat(6, 1fr)은 1fr 1fr 1fr 1fr 1fr 1fr과 같다.
  grid-template-rows: repeat(3, minmax(50px, auto));
  gap: 1rem;
`;

const Content = styled.div`
  display: grid;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
  gap: 1rem;
`;

const ImgBox = styled.div`
  display: grid;
  grid-column: 1 / span 8;
  grid-row: 1 / span 1;
  max-width: 850px;
  min-height: 700px;
  /* background-color: coral; */
  border: 1px dotted gray;
`;

const PostDetail = styled.div`
  display: grid;
  grid-column: 9 / span 4;
  grid-row: 1 / span 1;
`;

const ButtonBox = styled.div`
  display: grid;
  grid-column: 11 / span 1;
  grid-row: 3 / span 1;
`;

const Toast = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 2 / span 10;
  grid-row: 2 / span 1;
`;

export default CreatePost;
