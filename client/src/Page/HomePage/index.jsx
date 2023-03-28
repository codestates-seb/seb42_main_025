import styled from 'styled-components';
import Carousel from 'Components/Carousel';
import Commissions from '../../Components/Commissions';
import Typography from 'Components/Typography';
import AdComponent from 'Components/AdComponent';
import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';

const items = [{ id: 'dd', url: 'dd' }];

function Home() {
  const [commissions, setCommissions] = useState(null);
  const [carouselBackground, setCarouselBackground] = useState(items[0].url);

  const changeCarouselImage = target => {
    setCarouselBackground(target);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions();
      setCommissions(data);
    };
    fetch();
  }, []);

  const view = 'view';

  return (
    <>
      <StyledContainer>
        <Contents>
          <CarouselBox>
            <Carousel items={commissions} changeCarouselImage={changeCarouselImage} />
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
            <Commissions />
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
            <Commissions path={view} />
          </SellContainer>
          <SellContainer>
            {/* <Typography
              variant="h2"
              text="추천 커미션"
              size="xl"
              bold="bold"
              space="nowrap"
              color="tea_2"
              padding="m"
            />
            <Commissions /> */}
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
  grid-template-rows: repeat(auto, minmax(3.5rem, auto));
  gap: 8rem 0;
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
