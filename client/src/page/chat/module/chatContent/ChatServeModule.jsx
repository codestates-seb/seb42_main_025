import Typography from 'component/Text/Typography';
import styled, { css } from 'styled-components';
import ChatCommissionRequestModule from './ChatCommissionRequestModule';

function ChatServeModule({ chat, yourChat, trade }) {
  return (
    <StyledContainer yourChat={yourChat}>
      {trade ? (
        <StyeldChatContainer>
          <StyeldNameContainer>
            <Typography text={yourChat && '상대 이름'} size="m" margin="xxs" />
          </StyeldNameContainer>
          <ChatCommissionRequestModule info={trade} />
          <Typography size="s" bold="bold" color="gray_3" text="시간" start={yourChat && 'start'} />
        </StyeldChatContainer>
      ) : (
        <StyeldChatContainer>
          <StyeldNameContainer>
            <Typography text={yourChat && '상대 이름'} size="m" margin="xxs" />
          </StyeldNameContainer>
          <StyeldChatContent>{chat}</StyeldChatContent>
          <Typography size="s" bold="bold" color="gray_3" text="시간" start={yourChat && 'start'} />
        </StyeldChatContainer>
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

const StyeldChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const StyeldChatContent = styled.span`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  background-color: #fff;
`;

const StyeldNameContainer = styled.span`
  display: flex;
  justify-content: end;
`;

export default ChatServeModule;
