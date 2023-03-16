import styled, { css } from 'styled-components';

function SmallTextComponent({ text, start, column, row }) {
  return (
    <StyledFont column={column} row={row} start={start}>
      {text}
    </StyledFont>
  );
}

const StyledFont = styled.div`
  display: grid;
  font-size: 0.75rem;
  font-weight: bold;
  color: #cecece;
  white-space: nowrap;
  justify-items: end;
  ${({ column, row, start }) => {
    return css`
      grid-column: ${column};
      grid-row: ${row};
      justify-items: ${start};
    `;
  }}
`;

export default SmallTextComponent;
