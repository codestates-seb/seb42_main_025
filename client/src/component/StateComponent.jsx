import styled, { css } from 'styled-components';

function StateComponent({ state }) {
  return <StateSign state={state} />;
}

const StateSign = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: orange;
  ${({ theme, state }) => {
    console.log(theme, state);
    return css`
      background-color: ${state};
    `;
  }}
`;

export default StateComponent;
