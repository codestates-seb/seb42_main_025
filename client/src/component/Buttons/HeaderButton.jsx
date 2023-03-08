import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme, color }) => {
    const selected = theme.themeColor[color];
    return css`
      > button {
        border: 1px solid gray;
        padding: 0.5rem;
        margin: 0.5rem;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: bold;
        color: #fff;
        background-color: ${selected};
        cursor: pointer;
      }
    `;
  }}
`;

function HeaderButton({ value, onClick }) {
  return (
    <S_Container color="milkTea">
      <button onClick={onClick}>{value}</button>
    </S_Container>
  );
}

export default HeaderButton;
