import StateComponent from 'component/StateComponent';
import Typography from 'component/Text/Typography';
import styled from 'styled-components';

function ChatSingleListModule() {
  return (
    <StyledChatList>
      <StateComponent state="blue" column="1 / span 1" row="1 / span 2" />
      <Typography text="이름" bold="bold" line={1} column="2 / span 7" row="1 / span 1" />
      <Typography text="최근 채팅" line={1} column="2 / span 11" row="2 / span 1" />
      <Typography size="s" text="2023-03-15" column="9 / span 4" row="1 / span 2" />
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
