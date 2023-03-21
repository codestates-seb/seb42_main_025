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
        <Button text="보내기" addStyle={{ width: 'w_m', height: 'h_m', margin: '0 0 0 1rem' }} />
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
  background-color: #fff;
`;

export default ChatContentModule;
