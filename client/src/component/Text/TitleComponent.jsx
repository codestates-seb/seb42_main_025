import styled, { css } from 'styled-components';

function TitleComponent({ title, fontSize, underbar, row, column }) {
  return (
    <StyledFont fontSize={fontSize} underbar={underbar} row={row} column={column}>
      {title}
    </StyledFont>
  );
}

const StyledFont = styled.div`
  display: grid;
  align-self: flex-end;
  width: fit-content;
  height: fit-content;
  font-size: '1rem';
  font-weight: bold;
  white-space: nowrap;

  ${({ underbar }) => {
    if (underbar) {
      return css`
        padding: 1rem;
        border-bottom: 1px solid #000;
      `;
    }
  }}

  ${({ fontSize, row, column }) => {
    return css`
      font-size: ${fontSize};
      grid-row: ${row};
      grid-column: ${column};
    `;
  }}
`;

export default TitleComponent;
