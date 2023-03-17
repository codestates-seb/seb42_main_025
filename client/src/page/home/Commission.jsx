import styled from 'styled-components';
import imgUrl from 'assets/shoes1.jpg';
import { Link } from 'react-router-dom';

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

function commission() {
  return (
    <CommissionBox>
      {items.map(item => {
        return (
          <div key={item.id}>
            <SellBox to="/commission">
              <Tag>오마카세</Tag>
              <Image src={item.url}></Image>
              <Title>신발 나눔</Title>
              <Author>이현동</Author>
            </SellBox>
          </div>
        );
      })}
    </CommissionBox>
  );
}

const CommissionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const SellBox = styled(Link)`
  display: grid;
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  outline: none;
`;

const Tag = styled.div`
  padding-top: 1rem;
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

export default commission;
