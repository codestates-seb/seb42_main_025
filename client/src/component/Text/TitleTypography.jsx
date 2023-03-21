import styled from 'styled-components';

function TitleTypography({ text, size, color, bold, column, row }) {
  return (
    <StyledFont size={size} color={color} bold={bold} column={column} row={row}>
      {text}
    </StyledFont>
  );
}

const StyledFont = styled.h2.attrs(props => ({
  size: props.size || '1.5rem',
  color: props.color,
  bold: props.bold || 'bold',
  column: props.column,
  row: props.row,
}))`
  display: grid;
  white-space: nowrap;
  align-self: flex-end;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => props.bold};
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

export default TitleTypography;
