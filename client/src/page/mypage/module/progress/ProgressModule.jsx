import styled from 'styled-components';
import ProgressListModule from './ProgressListModule';
import TitleComponent from 'component/Text/TitleComponent';

function ProgressModule() {
  return (
    <>
      <TitleComponent title="진행 목록" fontSize={'1.5rem'} underbar={'yes'} />
      <StyledListContainer>
        <ProgressListModule />
        <ProgressListModule />
        <ProgressListModule />
      </StyledListContainer>
    </>
  );
}

const StyledListContainer = styled.ul`
  display: grid;
  grid-column: 1 / span 8;
  grid-row: span 3;
  padding: 1rem;
  border: 1px solid #000;
  list-style: none;
`;
export default ProgressModule;
