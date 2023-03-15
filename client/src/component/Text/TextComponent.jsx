import styled from 'styled-components';

function TextComponent({ text, fontColor }) {
  return <StyledFont fontColor={fontColor}>{text}</StyledFont>;
}

const StyledFont = styled.div`
  color: ${props => props.fontColor || '#000'};
`;

export default TextComponent;
