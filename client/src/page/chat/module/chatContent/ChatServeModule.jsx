import SmallTextComponent from 'component/Text/SmallTextComponent';
import TextComponent from 'component/Text/TextComponent';
import styled, { css } from 'styled-components';

function ChatServeModule({ chat, yourChat }) {
  return (
    <StyledContainer yourChat={yourChat}>
      <StyeldChatContainer>
        <StyeldNameContainer>
          <TextComponent text={yourChat && '상대 이름'} />
        </StyeldNameContainer>
        <StyeldChatContent>{chat}</StyeldChatContent>
        <SmallTextComponent text="시간" start={yourChat && 'start'} />
      </StyeldChatContainer>
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
  width: fit-content;
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
