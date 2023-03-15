import styled from 'styled-components';
import Carousel from 'component/Carousel.jsx';
import Commission from './Commission.jsx';
import { Container } from 'container/Container.jsx';

const Contents = styled.div`
  display: grid;
  padding-top: 5rem;
  max-width: 1280px;
  grid-template-columns: repeat(12, 1fr); //repeat(6, 1fr)은 1fr 1fr 1fr 1fr 1fr 1fr과 같아요.
  grid-template-rows: repeat(3, minmax(100px, auto));
  gap: 1rem;
`;

const CarouselBox = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 2 / span 10;
  grid-row: 1 / span 1;
`;

const NewOne = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  margin: 70px 0px 18px 0px;
`;

const SellContainer = styled.div`
  grid-column: 1 / span 12;
  grid-row: 3 / span 1;
  flex-wrap: wrap;
  line-height: 1.6;
`;

function Home() {
  return (
    <>
      <Container>
        <Contents>
          <CarouselBox>
            <Carousel />
          </CarouselBox>
          <NewOne>새로운 커미션들</NewOne>
          <SellContainer>
            <Commission></Commission>
          </SellContainer>
        </Contents>
      </Container>
    </>
  );
}

export default Home;
