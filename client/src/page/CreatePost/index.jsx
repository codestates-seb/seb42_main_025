import InputComponent from 'Components/InputComponent';
import styled from 'styled-components';
import Button from 'Components/Button';
import { Container } from 'Container/Container';
import TextEditor from 'Components/Editor';
import { Dropzone, CreateTag, InputText } from './module';
import { postCommission } from 'apis/api/commission';
import { useRef, useState } from 'react';

function CreatePost() {
  const [isFiles, setIsFiles] = useState([]);
  const [isTags, setIsTags] = useState([]);
  console.log(isTags);

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   files.forEach(file => formData.append('file', file));
  //   formData.append('upload_preset', 'friendsbook');

  //   const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  //   const data = await fetch(URL, {
  //     method: 'POST',
  //     body: formData,
  //   }).then(res => res.json());

  //   console.log(data);
  // };

  const titleRef = useRef(null);
  const subContentRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    isFiles.forEach(file => formData.append('multipartFile', file));
    // tagRef.forEach(tag => formData.append('tags', [tag]));

    // formData.append('multipartFile', files[0]);
    // formData.append('multipartFile', files[1]);
    formData.append('title', titleRef.current.value);
    formData.append('subContent', subContentRef.current.value);
    formData.append('content', contentRef.current?.getInstance().getMarkdown());
    formData.append('tags', ['태그1']);
    formData.append('tags', ['태그2']);

    const res = postCommission(formData);
    console.log(formData);
    console.log(res);
    console.log(isFiles);
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
