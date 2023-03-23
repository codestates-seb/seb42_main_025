import styled from 'styled-components';

function Button({ buttonType, text, handleClick, addStyle = {} }) {
  return (
    <StyledButton type={buttonType} onClick={handleClick} addStyle={addStyle}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button.attrs(props => ({
  width: props.addStyle.width,
  height: props.addStyle.height,
  border: props.addStyle.border,
  borderRadius: props.addStyle.borderRadius,
  fontSize: props.addStyle.fontSize,
  backgroundColor: props.addStyle.backgroundColor,
  color: props.addStyle.color,
  row: props.addStyle.row,
  margin: props.addStyle.margin,
  padding: props.addStyle.padding,
  borderColor: props.addStyle.borderColor,
}))`
  max-width: ${props => props.theme.sizes[props.width] || 'inherit'};
  height: ${props => props.theme.sizes[props.height]};
  border-radius: ${props => props.theme.radiuses[props.borderRadius] || '0.25rem'};
  font-size: ${props => props.theme.fontSizes[props.fontSize]};
  background-color: ${props => props.theme.colors[props.backgroundColor] || '#ececec'};
  grid-row: ${props => props.row || 'inherit'};
  border: ${props => (props.border ? 'solid 1px' : 'none')};
  border-color: ${props => props.theme.colors[props.borderColor]};
  color: ${props => props.theme.colors[props.color]};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-weight: bold;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Button;
