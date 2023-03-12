import styled from 'styled-components';
import Carousel from 'component/Carousel.jsx';
import { Container } from 'container/Container';
import imgUrl from 'assets/shoes1.jpg';

const Contents = styled.div`
  height: 100vh;
`;

const Commission = styled.div`
  margin: 70px 0px 18px 0px;
`;

const SellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SellBox = styled.div`
  margin-left: 10px;
`;

const Tag = styled.div`
  padding-top: 2px;
`;

const Image = styled.img`
  height: 135px;
  width: 240px;
`;

const Title = styled.div`
  padding-top: 2px;
`;

const Author = styled.div`
  padding-top: 2px;
`;

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
];

function Home() {
  return (
    <>
      <Container>
        <Contents>
          <Carousel />
          <Commission>새로운 커미션들</Commission>
          <SellContainer>
            {items.map(item => {
              return (
                <div key={item.id}>
                  <SellBox>
                    <Tag>태그</Tag>
                    <Image src={item.url}></Image>
                    <Title>제목</Title>
                    <Author>작가</Author>
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
