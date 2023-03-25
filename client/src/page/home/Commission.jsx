import styled from 'styled-components';
import TagComponent from 'component/TagComponent';
import Typography from 'component/Typography';
import ImageComponent from 'component/ImageComponent';
import { useNavigate, useParams } from 'react-router-dom';
import shoes1 from '../../assets/shoes1.jpg';
import { useEffect, useState } from 'react';
import { getCommissions } from 'apis/api/commissions';

function commission() {
  const params = useParams();
  const [commissions, setCommissions] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions(params.id);
      setCommissions(data);
    };
    fetch();
  }, [setCommissions]);

  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/commission/${id}`);
  };

  console.log(commissions);

  return (
    <CommissionBox>
      {commissions &&
        commissions.map(item => {
          return (
            <div key={item.commissionId}>
              <TagBox>
                {item &&
                  item.tags.map(tag => {
                    return <TagComponent key={tag} text={tag} />;
                  })}
              </TagBox>
              <SellBox onClick={() => handleClick(item.commissionId)}>
                <ImageComponent src={shoes1} alt={item.imageUrl} imgStyle="commission" width="xl" />
                <Typography text={item.title} bold="bold" />
                <Typography text={item.memberName} size="s" />
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

const TagBox = styled.div`
  display: flex;
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
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default commission;
