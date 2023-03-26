import Typography from 'Components/Typography';
import styled, { css } from 'styled-components';
import ChatTradeModule from './ChatTradeModule';

function ChatServeModule({ chat, yourChat, trade }) {
  return (
    <StyledContainer yourChat={yourChat}>
      {trade ? (
        <StyledChatContainer>
          <StyledNameContainer>
            <Typography text={yourChat && '상대 이름'} size="m" margin="xxs" />
          </StyledNameContainer>
          <ChatTradeModule info={trade} />
          <Typography size="s" bold="bold" color="gray_3" text="시간" start={yourChat && 'start'} />
        </StyledChatContainer>
      ) : (
        <StyledChatContainer>
          <StyledNameContainer>
            <Typography text={yourChat && '상대 이름'} size="m" margin="xxs" />
          </StyledNameContainer>
          <StyledChatContent>{chat}</StyledChatContent>
          <Typography size="s" bold="bold" color="gray_3" text="시간" start={yourChat && 'start'} />
        </StyledChatContainer>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  ${({ yourChat }) => {
    if (yourChat) {
      return css`
        align-items: flex-end;
      `;
    }
  }}
`;

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const StyledChatContent = styled.span`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  background-color: #fff;
`;

const StyledNameContainer = styled.span`
  display: flex;
  justify-content: end;
`;

export default ChatServeModule;
