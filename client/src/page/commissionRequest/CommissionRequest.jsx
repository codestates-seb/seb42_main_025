import { useState } from 'react';
import styled from 'styled-components';
import Button from 'component/Buttons/Button';
import CommissionRequestModule from './Module/CommissionRequestBox';
import TextEditor from 'component/Editor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CommissionRequest() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // 입력한 데이터를 서버로 전송
      const response = await axios.post('http://3.37.139.165/trade', {
        title,
        content,
      });
      console.log(response.data);

      // ChatPage로 이동
      navigate('/chat/chatpage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <CommissionRequestModule info={info} />
      <TitleLabel>제목</TitleLabel>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <TextEditor editorHeight={'25rem'} value={content} onChange={setContent} />
      <FormSpacer />
      <form
        onSubmit={handleSubmit}
        style={{ position: 'absolute', bottom: '4rem', right: '0.5rem' }}
      >
        <Button type="submit" text="신청하기" addStyle={{ width: 'w_m', height: 'h_s' }} />
      </form>
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
  margin-top: 2rem;
`;

const TitleLabel = styled.label`
  font-size: 1rem;
  width: 53%;
  margin-top: -3rem;
  margin-bottom: -13rem;
  justify-self: start;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  width: 100%;
  margin-bottom: -3rem;
  padding: 0.5rem;
  border: 1px solid #dadde6;
  margin-top: 1rem;
`;

export default CommissionRequest;
