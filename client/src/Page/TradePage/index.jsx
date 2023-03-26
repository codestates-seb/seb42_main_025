import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'Components/Button';
import TradeModuleBox from './module/TradeModuleBox';
import TextEditor from 'Components/Editor';
import { postTrade } from 'apis/api/trade';

function TradePage() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: 'title',
    content: 'content',
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const params = useParams();
  const editorRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const token = localStorage.getItem('authorization');

    const data = {
      title: title.trim(),
      content: content.trim(),
      commissionId: params.id,
    };

    try {
      const res = await postTrade(data, token);
      navigate(`/chat/${res.tradeId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onEditorChange = () => {
    const content = editorRef.current.getInstance().getMarkdown().trim();
    setContent(content);
  };

  return (
    <Container>
      <TradeModuleBox info={info} />
      <TitleLabel>제목</TitleLabel>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <TextEditor
        editorRef={editorRef} // useRef로 생성한 ref 전달
        editorHeight={'25rem'}
        onEditorChange={onEditorChange}
      />
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

export default TradePage;
