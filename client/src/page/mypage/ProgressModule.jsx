import styled from 'styled-components';
import ProgressListModule from './ProgressListModule';
import TitleComponent from 'component/Text/TitleComponent';

function ProgressModule() {
  return (
    <>
      <StyledTitleContainer>
        <TitleComponent title="진행 목록" fontSize={'1.5rem'} underbar={'yes'} />
      </StyledTitleContainer>
      <StyledListContainer>
        <ProgressListModule />
        <ProgressListModule />
        <ProgressListModule />
      </StyledListContainer>
    </>
  );
}

const StyledListContainer = styled.li`
  display: grid;
  grid-column: 1 / span 8;
  padding: 1rem;
  border: 1px solid #000;
  list-style: none;
`;

const StyledTitleContainer = styled.div`
  grid-column: 1 / span 3;
  align-self: flex-end;
`;

export default ProgressModule;
