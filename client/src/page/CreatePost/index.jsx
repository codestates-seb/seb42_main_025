import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import Button from 'component/Button';
import Dropzone from './Dropzone';
import { Container } from 'container/Container';
import TextEditor from 'component/Editor';

function CreatePost() {
  return (
    <Container>
      <ContentBox>
        <Content>
          <ImgBox>
            <Dropzone />
          </ImgBox>
          <PostDetail>
            <div>
              제목
              <InputComponent />
            </div>
            <TextEditor editorHeight={'20rem'} />
            <div>
              태그
              <InputComponent />
            </div>
          </PostDetail>
        </Content>
        <Toast>
          <TextEditor editorHeight={'30rem'} />
        </Toast>
        <ButtonBox>
          <Button
            text="등록"
            path="/commission"
            addStyle={{
              width: 'w_xl',
              height: 'h_m',
              radius: 'base',
              padding: '1rem',
            }}
          />
        </ButtonBox>
      </ContentBox>
    </Container>
  );
}

const ContentBox = styled.div`
  min-width: 1280px;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  min-height: 650px;
`;

const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Toast = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
`;

export default CreatePost;
