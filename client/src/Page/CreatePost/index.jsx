import styled from 'styled-components';
import InputComponent from 'Components/InputComponent';
import Button from 'Components/Button';
import { Container } from 'Container/Container';
import TextEditor from 'Components/Editor';
import { Dropzone, CreateTag, InputText } from './module';
import { postCommission, patchCommission } from 'apis/api/commission';
import { useState, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Alert } from '@mui/material';

function CreatePost() {
  const [isFiles, setIsFiles] = useState([]);
  const [isTags, setIsTags] = useState([]);
  const [isBlank, setIsBlank] = useState(false);
  const titleRef = useRef(null);
  const subContentRef = useRef(null);
  const contentRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { commission } = useLocation();
  console.log(commission);

  const handleSubmit = e => {
    e.preventDefault();
    if (
      titleRef.current.value === '' ||
      subContentRef.current.value === '' ||
      contentRef.current?.getInstance().getMarkdown() === '' ||
      isFiles.length === 0 ||
      isTags.length === 0
    ) {
      setIsBlank(true);
    } else {
      setIsBlank(false);

      const formData = new FormData();

      isFiles.forEach(file => formData.append('multipartFile', file));
      isTags.forEach(tag => formData.append('tags', tag));

      formData.append('title', titleRef.current.value);
      formData.append('subContent', subContentRef.current.value);
      formData.append('content', contentRef.current?.getInstance().getMarkdown());

      if (window.location.href.split('/').pop() === 'edit-commission') {
        patchCommission(formData, id);
      } else {
        postCommission(formData);
      }
      navigate(`/mypage/${id}`);
    }
  };
  return (
    <Container>
      <ContentBox>
        <Content>
          <ImgBox>
            <Dropzone setIsFiles={setIsFiles} />
          </ImgBox>
          <PostDetail>
            <InputComponent label="제목" placeholder="제목을 입력하세요." titleRef={titleRef} />
            <InputText label="소개글" subContentRef={subContentRef} />
            <CreateTag setIsTags={setIsTags} />
          </PostDetail>
        </Content>
        <Toast>
          <TextEditor editorHeight={'30rem'} editorRef={contentRef} />
        </Toast>
        {isBlank && (
          <Alert severity="error">
            이미지, 제목, 소개글, 본문, 태그 중 하나라도 비어있으면 게시물 등록이 되지않습니다
          </Alert>
        )}
        <ButtonBox>
          <Button
            text="등록"
            buttonType="submit"
            handleClick={handleSubmit}
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
  max-width: 1280px;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

const ImgBox = styled.div`
  display: flex;
  min-height: 650px;
  flex: 2;
`;

const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 30px;
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Toast = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 0.25rem;
`;

export default CreatePost;
