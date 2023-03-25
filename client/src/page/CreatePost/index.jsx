import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import Button from 'component/Button';
import Dropzone from './Dropzone';
import { Container } from 'container/Container';
import TextEditor from 'component/Editor';
import InputText from './InputText';
import { postCommission } from 'apis/api/commission';
import { useRef, useState } from 'react';

function CreatePost() {
  const [files, seFiles] = useState([]);
  // console.log(commissionId);

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

    const data = {
      title: titleRef.current.value,
      subContent: subContentRef.current.value,
      content: contentRef.current?.getInstance().getMarkdown(),
      tags: 'zz',
      multipartFile: files,
    };
    const res = postCommission(data);
    console.log(data);
    console.log(res);
    console.log(files);
  };

  return (
    <Container>
      <ContentBox>
        <Content>
          <ImgBox>
            <Dropzone seFiles={seFiles} />
          </ImgBox>
          <PostDetail>
            <InputComponent label="제목" placeholder="제목을 입력하세요." titleRef={titleRef} />
            <InputText label="소개글" subContentRef={subContentRef} />
            <InputComponent label="태그" placeholder="태그를 입력하세요." />
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
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 0.25rem;
`;

export default CreatePost;
