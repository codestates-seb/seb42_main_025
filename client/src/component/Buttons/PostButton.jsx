import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme, color }) => {
    const selectColor = color || theme.themeColor.milkTea;
    return css`
      > button {
        padding: 0.7rem 1rem;
        margin: 0.5rem;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: bold;
        color: #fff;
        background-color: ${selectColor};
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

function PostButton({ value, onClick, propsColor }) {
  return (
    <S_Container color={propsColor}>
      <button onClick={onClick}>{value}</button>
    </S_Container>
  );
}

export default PostButton;
