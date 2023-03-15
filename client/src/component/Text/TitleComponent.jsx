import styled from 'styled-components';

function TitleComponent({ title, fontSize, underbar }) {
  return (
    <StyledFont fontSize={fontSize}>
      {underbar ? (
        <StyledUnderbar>{title}</StyledUnderbar>
      ) : (
        <StyledNotUnderbar>{title}</StyledNotUnderbar>
      )}
    </StyledFont>
  );
}

const StyledFont = styled.div`
  display: grid;
  align-self: flex-end;
  height: fit-content;
  font-size: ${props => props.fontSize || '16px'};
  font-weight: bold;
`;

const StyledUnderbar = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #000;
`;

const StyledNotUnderbar = styled.div``;

export default TitleComponent;
