import styled from 'styled-components';

function SmallTextComponent({ smallText }) {
  return <StyledFont>{smallText}</StyledFont>;
}

const StyledFont = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #cecece;
`;

export default SmallTextComponent;
