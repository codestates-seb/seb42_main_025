import styled from 'styled-components';
import Button from 'component/Buttons/Button';
import InputComponent from 'component/InputComponent';
import ChatServeModule from './ChatServeModule';

function ChatContentModule() {
  return (
    <StyledContainer>
      <StyledChatContainer>
        <ChatServeModule chat={'mychat'} />
        <ChatServeModule
          chat={'yourchㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇat'}
          yourChat={true}
        />
      </StyledChatContainer>
      <StyledInputContainer>
        <InputComponent />
        <Button text="보내기" addStyle={{ width: '5rem', height: '2.5rem', padding: '0.5rem' }} />
      </StyledInputContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 7;
  height: 70vh;
  width: 100%;
  padding: 1rem;
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
  padding-right: 1.5rem;
  background-color: #fff;
`;

export default ChatContentModule;
