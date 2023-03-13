import styled from 'styled-components';
import Carousel from 'component/Carousel.jsx';
import imgUrl from 'assets/shoes1.jpg';

const Container = styled.div`
  margin-top: 71px;
  max-width: 1280px;
`;

const Contents = styled.div`
  max-width: 1280px;
`;

const Commission = styled.div`
  margin: 70px 0px 18px 0px;
  width: 100%;
`;

const SellContainer = styled.div`
  display: flex;
  max-width: 1280px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 1.5;
`;

const SellBox = styled.div`
  margin-left: 10px;
`;

const Tag = styled.div`
  padding-top: 10px;
`;

const Image = styled.img`
  height: 135px;
  width: 240px;
`;

const Title = styled.div`
  /* padding-top: 2px; */
`;

const Author = styled.div`
  /* padding-top: 2px; */
`;

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];

function Home() {
  return (
    <>
      <Container>
        <Contents>
          <Carousel />
          <SellContainer>
            <Commission>새로운 커미션들</Commission>
            {items.map(item => {
              return (
                <div key={item.id}>
                  <SellBox>
                    <Tag>오마카세</Tag>
                    <Image src={item.url}></Image>
                    <Title>신발 나눔</Title>
                    <Author>이현동</Author>
                  </SellBox>
                </div>
              );
            })}
          </SellContainer>
        </Contents>
      </Container>
    </>
  );
}

export default Home;
