import styled, { css } from 'styled-components';

const S_Container = styled.div`
  ${({ theme }) => {
    const milkTea = theme.themeColor.milkTea;
    return css`
      > button {
        padding: 0.5rem;
        margin: 0.5rem;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: bold;
        color: #fff;
        background-color: ${milkTea};
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

function PostButon({ value, onClick }) {
  return (
    <S_Container>
      <button onClick={onClick}>{value}</button>
    </S_Container>
  );
}

export default PostButon;
