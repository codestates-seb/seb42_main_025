import styled, { css } from 'styled-components';

function StateComponent({ state, column, row }) {
  return (
    <StyledContainer column={column} row={row}>
      <StateSign state={state} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

const StateSign = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: orange;
  ${({ state }) => {
    return css`
      background-color: ${state};
    `;
  }}
`;

export default StateComponent;
