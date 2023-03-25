import styled from 'styled-components';
import InputComponent from 'component/InputComponent';
import Button from 'component/Button';
import Dropzone from './Dropzone';
import { Container } from 'container/Container';
import TextEditor from 'component/Editor';
import InputText from './InputText';
// import { useRecoilValue } from 'recoil';
// import { postCommissions } from 'apis/api/commissions';

import { postCommission } from 'apis/api/commission';
import { useState } from 'react';

function CreatePost() {
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

  const [resCommission, setResCommission] = useState(null);
  const imagee =
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg';

  const handleSubmit = () => {
    const data = {
      title: 'hard',
      content: 'hardd',
      subContent: 'subsub',
      tags: ['dd'],
      multipartFile: imagee,
    };
    setResCommission(postCommission(data));
  };

  console.log(resCommission);

  return (
    <Container>
      <ContentBox>
        <Content>
          <ImgBox>
            <Dropzone />
          </ImgBox>
          <PostDetail>
            <InputComponent label="제목" placeholder="제목을 입력하세요." />
            <InputText label="소개글" />
            <InputComponent label="태그" placeholder="태그를 입력하세요." />
          </PostDetail>
        </Content>
        <Toast>
          <TextEditor editorHeight={'30rem'} />
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
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid #ce8e5b;
  border-radius: 0.25rem;
`;

export default CreatePost;
