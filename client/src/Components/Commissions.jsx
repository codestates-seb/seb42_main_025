import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';
import Typography from 'Components/Typography';
import ImageComponent from 'Components/ImageComponent';
import { useNavigate } from 'react-router-dom';

function Commissions({ commissions }) {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/commission/${id}`);
    window.location.reload('/');
  };

  return (
    <CommissionBox>
      {commissions.map(item => {
        return (
          <div key={item.commissionId}>
            <TagComponent tags={item.tags} />
            <SellBox onClick={() => handleClick(item.commissionId)}>
              <ImageComponent
                src={item.imageUrl[1]}
                alt={item.imageUrl[1]}
                imgStyle="commission"
                width="xl"
              />
              <Typography text={item.title} bold="bold" size="l" />
              <Typography text={item.memberName} size="m" />
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

// const TagBox = styled.div`
//   display: flex;
// `;

const SellBox = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  text-decoration: none;
  outline: none;
  line-height: 1.6;
  border: none;
  background-color: transparent;
  justify-content: start;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Commissions;
