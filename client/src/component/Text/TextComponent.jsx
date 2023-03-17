import styled, { css } from 'styled-components';

function TextComponent({ text, fontColor, bold, column, row }) {
  return (
    <StyledFont fontColor={fontColor} bold={bold} column={column} row={row}>
      {text}
    </StyledFont>
  );
}

const StyledFont = styled.div`
  display: grid;
  font-size: 16px;
  white-space: nowrap;
  ${({ fontColor, bold, column, row }) => {
    return css`
      color: ${fontColor};
      font-weight: ${bold};
      grid-column: ${column};
      grid-row: ${row};
    `;
  }}
`;

export default TextComponent;
