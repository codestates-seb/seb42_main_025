import styled, { css } from 'styled-components';

const S_Container = styled.section`
  ${({ theme }) => {
    const lighterGray = theme.themeColor.lighterGray;
    return css`
      display: grid;
      width: 100%;
      border: 1px solid ${lighterGray};
    `;
  }}
`;

function ChatList() {
  return <S_Container></S_Container>;
}

export default ChatList;
