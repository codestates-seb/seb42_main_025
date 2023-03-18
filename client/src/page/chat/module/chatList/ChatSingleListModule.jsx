import StateComponent from 'component/StateComponent';
import SmallTextComponent from 'component/Text/SmallTextComponent';
import TextComponent from 'component/Text/TextComponent';
import styled from 'styled-components';

function ChatSingleListModule() {
  return (
    <StyledChatList>
      <StateComponent state="blue" column="1 / span 1" row="1 / span 2" />
      <TextComponent text="이름" bold="bold" column="2 / span 7" row="1 / span 1" />
      <TextComponent text="최근 채팅" column="2 / span 11" row="2 / span 1" />
      <SmallTextComponent text="2023-03-15" column="9 / span 4" />
    </StyledChatList>
  );
}

const StyledChatList = styled.li`
  display: grid;
  height: fit-content;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;
  padding: 0.5rem;
  list-style: none;
`;

export default ChatSingleListModule;
