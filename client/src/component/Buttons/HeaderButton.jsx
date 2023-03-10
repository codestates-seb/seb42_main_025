import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme, color }) => {
    const selectColor = color || theme.themeColor.milkTeaTwo;
    return css`
      > button {
        padding: none;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: bolder;
        font-size: 16px;
        color: ${selectColor};
        background-color: transparent;
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

function HeaderButton({ value, onClick, propsColor, name }) {
  return (
    <S_Container color={propsColor}>
      <button onClick={onClick} className={name}>
        {value}
      </button>
    </S_Container>
  );
}

export default HeaderButton;
