import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme, color }) => {
    const selectColor = color || theme.themeColor.darkGray;
    const selectBorder = theme.themeColor.lightGray;
    return css`
      > button {
        padding: 0.7rem 1rem;
        margin: 0.5rem;
        border: 1px solid ${selectBorder};
        border-radius: 30px;
        white-space: nowrap;
        font-weight: bold;
        color: ${selectColor};
        background-color: #fff;
        cursor: pointer;
        :hover {
          filter: brightness(0.9);
        }
        :active {
          filter: brightness(0.8);
          transform: translate(0px, 1px);
        }
      }
    `;
  }}
`;

function PatchButton({ value, onClick, propsColor }) {
  return (
    <S_Container color={propsColor}>
      <button onClick={onClick}>{value}</button>
    </S_Container>
  );
}

export default PatchButton;
