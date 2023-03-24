import styled from 'styled-components';
import TagComponent from 'component/TagComponent';
import Typography from 'component/Typography';
import ImageComponent from 'component/ImageComponent';
import { useNavigate } from 'react-router-dom';

function commission({ items }) {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/commission/${id}`);
  };

  console.log(items);

  return (
    <CommissionBox>
      {items &&
        items.map(item => {
          return (
            <div key={item.commissionId}>
              <TagComponent text="오마카세" />
              <SellBox onClick={() => handleClick(item.commissionId)}>
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

const SellBox = styled.div`
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
