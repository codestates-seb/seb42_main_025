import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme }) => {
    const milkTeaTwo = theme.themeColor.milkTeaTwo;
    return css`
      > button {
        padding: 0.5rem;
        margin: 0.5rem;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: bolder;
        font-size: 16px;
        color: ${milkTeaTwo};
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

function HeaderButton({ value, onClick }) {
  return (
    <S_Container>
      <button onClick={onClick}>{value}</button>
    </S_Container>
  );
}

export default HeaderButton;
