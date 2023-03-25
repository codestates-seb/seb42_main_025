import styled from 'styled-components';
import Carousel from 'component/Carousel';
import Commission from './Commission';
import Typography from 'component/Typography';
import AdComponent from 'component/AdComponent';
import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';

const items = [{ id: 'dd', url: 'dd' }];

function Home() {
  const [commissions, setCommissions] = useState(null);
  const [carouselBackground, setCarouselBackground] = useState(items[0].url);

  const changeaCarouselImage = target => {
    setCarouselBackground(target);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions();
      setCommissions(data);
    };
    fetch();
  }, []);

  console.log(commissions);

  return (
    <>
      <StyledContainer>
        <Contents>
          <CarouselBox>
            <Carousel items={commissions} changeaCarouselImage={changeaCarouselImage} />
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
            <Commission items={commissions} />
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
            <Commission items={commissions} />
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
            <Commission items={commissions} />
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
