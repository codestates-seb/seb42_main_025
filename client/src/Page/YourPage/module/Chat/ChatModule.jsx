import styled from 'styled-components';
import Typography from 'Components/Typography';
import ChatListModule from './ChatListModule';

function ChatModule({ info }) {
  return (
    <StyledContainer role={info.roles[0]}>
      <Typography
        variant="h2"
        text="채팅목록"
        size="xl"
        bold="bold"
        space="nowrap"
        color="tea_2"
        padding="m"
      />
      <StyledChatListBoxContainer>
        <ChatListModule info={info} />
      </StyledChatListBoxContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.aside.attrs(props => ({
  role: props.role,
}))`
  display: flex;
  flex-direction: column;
  grid-column: ${props => (props.role === 'AUTHOR' ? '8 / span 5' : '9 / span 4')};
  grid-row: ${props => (props.role === 'AUTHOR' ? null : '2 / span 1')};
`;

const StyledChatListBoxContainer = styled.div`
  padding: 2rem;
  gap: 1rem;
  background-color: #ececec;
`;

export default ChatModule;
