import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressModule from './ProgressModule';

function Mypage() {
  return (
    <Container>
      <StyledContents>
        <ProgressModule />
      </StyledContents>
    </Container>
  );
}

const StyledContents = styled.section`
  display: grid;
  width: 1280px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(4rem, auto);
  gap: 1rem;
`;

export default Mypage;
