import styled from 'styled-components';
import Carousel from 'component/Carousel.jsx';
import Commission from './Commission.jsx';
import Typography from 'component/Typography';
import AdComponent from 'component/AdComponent.jsx';
import { useState } from 'react';
import imgUrl from 'assets/shoes1.jpg';
import Food from 'assets/1.JPG';

const items = [
  { id: 1, url: Food },
  { id: 2, url: imgUrl },
];

function Home() {
  const [carouselBackground, setCarouselBackground] = useState(items[0].url);

  const changeaCarouselImage = target => {
    setCarouselBackground(target);
  };

  return (
    <>
      <StyledContainer>
        <Contents>
          <CarouselBox>
            <Carousel items={items} changeaCarouselImage={changeaCarouselImage} />
          </CarouselBox>
          <CarouselBoxBackground url={carouselBackground} />

          <SellContainer>
            <Typography
              variant="h2"
              text="새로운 커미션"
              size="xl"
              bold="bold"
              space="nowrap"
              color="tea_2"
              padding="m"
            />
            <Commission />
          </SellContainer>
          <AdComponent />
          <SellContainer>
            <Typography
              variant="h2"
              text="인기 커미션"
              size="xl"
              bold="bold"
              space="nowrap"
              color="tea_2"
              padding="m"
            />
            <Commission />
          </SellContainer>

          <SellContainer>
            <Typography
              variant="h2"
              text="추천 커미션"
              size="xl"
              bold="bold"
              space="nowrap"
              color="tea_2"
              padding="m"
            />
            <Commission />
          </SellContainer>
        </Contents>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: grid;
  max-width: 1280px;
  min-height: 100vh;
  justify-content: center;
  padding: 5rem 0;
  overflow-x: hidden;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); //repeat(6, 1fr)은 1fr 1fr 1fr 1fr 1fr 1fr과 같아요.
  grid-template-rows: repeat(8, minmax(3.5rem, auto));
  gap: 1rem;
`;

const CarouselBox = styled.div`
  display: grid;
  justify-content: center;
  padding: 5rem 0 3rem 0;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
`;

const CarouselBoxBackground = styled.div.attrs(props => ({
  url: props.url,
}))`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
  margin-bottom: 3rem;
  filter: blur(2rem);
  z-index: -2;
`;

const SellContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / span 12;
  flex-wrap: wrap;
  padding-bottom: 3rem;
`;

export default Home;
