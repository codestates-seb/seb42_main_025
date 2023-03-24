import styled from 'styled-components';
import imgUrl from 'assets/shoes1.jpg';
import { Link } from 'react-router-dom';
import TagComponent from 'component/TagComponent';
import Typography from 'component/Typography';
import ImageComponent from 'component/ImageComponent';

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
  // const navigate = useNavigate()
  const handleClick = id => {
    console.log(id);
    // navigate(`/commission/`)
  };
  return (
    <CommissionBox>
      {items.map(item => {
        return (
          <div key={item.id}>
            <TagComponent text="오마카세" />
            <SellBox to="/commission" onClick={() => handleClick(item.id)}>
              <ImageComponent src={item.url} alt={item.url} imgStyle="commission" width="xl" />
              <Typography text="신발나눔" bold="bold" />
              <Typography text="이현동" size="s" />
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
  gap: 1rem;
  max-width: 100%;
`;

const SellBox = styled(Link)`
  display: grid;
  color: black;
  text-decoration: none;
  outline: none;
  line-height: 1.6;
  border: none;
  background-color: transparent;
  justify-content: start;
`;

export default commission;
