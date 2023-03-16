import styled, { css } from 'styled-components';

function SmallTextComponent({ text, column, row }) {
  return (
    <StyledFont column={column} row={row}>
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
  ${({ column, row }) => {
    return css`
      grid-column: ${column};
      grid-row: ${row};
    `;
  }}
`;

export default SmallTextComponent;
