import styled from 'styled-components';
import Button from 'Components/Button';
import InputComponent from 'Components/InputComponent';
import ChatServeModule from './ChatServeModule';
import Typography from 'Components/Typography';

function ChatContentModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '다양한 컨셉 디자인',
    content: '2번 신청하려고 합니다만..',
    subtitle: '2번 신청합니다.',
  };
  return (
    <StyledContainer>
      <Typography
        text="대화 내용"
        size="xl"
        variant="h2"
        bold="bold"
        padding="m"
        space="nowrap"
        color="tea_2"
      />
      <StyledChatContainer>
        <ChatServeModule chat={'mychat'} />
        <ChatServeModule
          chat={'yourchㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇat'}
          yourChat={true}
        />
        <ChatServeModule trade={info} yourChat={true} />
      </StyledChatContainer>
      <StyledInputContainer>
        <InputComponent />
        <Button text="보내기" addStyle={{ width: 'w_m', height: 'h_m', margin: '0 0 0 1rem' }} />
      </StyledInputContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 7;
  height: fit-content;
  width: 100%;
  padding: 1rem 0.5rem;
`;

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: #ececec;
`;

const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  background-color: #fff;
`;

export default ChatContentModule;
