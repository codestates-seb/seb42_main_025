import styled from 'styled-components';

function Typography({
  variant,
  text,
  size,
  color,
  bold,
  column,
  row,
  padding,
  flex,
  height,
  width,
  line,
  space,
  lineHeight,
  margin,
  textShadow,
}) {
  return (
    <StyledFont
      as={variant}
      size={size}
      color={color}
      bold={bold}
      column={column}
      row={row}
      padding={padding}
      flex={flex}
      height={height}
      width={width}
      line={line}
      space={space}
      lineHeight={lineHeight}
      margin={margin}
      textShadow={textShadow}
    >
      {text}
    </StyledFont>
  );
}

const StyledFont = styled.span.attrs(props => ({
  size: props.size,
  color: props.color,
  bold: props.bold,
  column: props.column,
  row: props.row,
  padding: props.padding,
  margin: props.margin,
  flex: props.flex,
  height: props.height,
  line: props.line,
  space: props.space || 'normal',
  width: props.width,
  lineHeight: props.lineHeight,
  textShadow: props.textShadow,
}))`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  width: 100%;
  line-height: ${props => props.theme.fontSizes[props.lineHeight]};
  white-space: ${props => props.space};
  -webkit-line-clamp: ${props => props.line};
  height: ${props => props.theme.sizes[props.height]};
  max-width: ${props => props.theme.sizes[props.width]};
  font-size: ${props => props.theme.fontSizes[props.size]};
  padding: ${props => props.theme.paddings[props.padding]};
  margin: ${props => props.theme.margins[props.margin]};
  color: ${props => props.theme.colors[props.color]};
  font-weight: ${props => props.bold};
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  flex: ${props => props.flex};
  text-shadow: ${props => props.textShadow};
`;

export default Typography;
