import styled, { css } from 'styled-components';

function StateComponent({ state, column, row }) {
  return (
    <StyledContainer column={column} row={row}>
      <StateSign state={state} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
  align-items: center;
  ${({ column, row }) => {
    return css`
      grid-column: ${column};
      grid-row: ${row};
    `;
  }}
`;

const StateSign = styled.div`
  display: grid;
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
