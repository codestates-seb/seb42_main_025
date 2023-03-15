import styled from 'styled-components';
import ProgressListSingleModule from './ProgressListSingleModule';
import TitleComponent from 'component/Text/TitleComponent';
import TextComponent from 'component/Text/TextComponent';

function ProgressListModule() {
  return (
    <StyledComponent>
      <StyeldHeaderArea>
        <TitleComponent title="신청 의뢰" fontSize={'1.25rem'} />
        <TextComponent text={'2'} />
      </StyeldHeaderArea>
      <StyledListBox>
        <ProgressListSingleModule />
        <ProgressListSingleModule />
      </StyledListBox>
      <div>{'더보기'}</div>
    </StyledComponent>
  );
}

const StyledComponent = styled.li`
  display: grid;
  grid-column: 1 / span 8;
  padding: 1rem;
  list-style: none;
`;

const StyledListBox = styled.ul``;

const StyeldHeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ProgressListModule;
