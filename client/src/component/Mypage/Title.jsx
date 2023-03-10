import styled, { css } from 'styled-components';

const S_Container = styled.header`
  ${({ theme, color }) => {
    const darkGray = color || theme.themeColor.darkGray;
    return css`
      margin: 1rem 2rem;
      padding: 1rem 0;
      font-size: 18px;
      color: ${darkGray};
      border-bottom: 1px solid ${darkGray};
    `;
  }}
`;

function Title({ title, color }) {
  return <S_Container color={color}>{title}</S_Container>;
}

export default Title;
