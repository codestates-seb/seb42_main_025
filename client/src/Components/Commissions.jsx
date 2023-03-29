import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';
import Typography from 'Components/Typography';
import ImageComponent from 'Components/ImageComponent';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSortCommissions } from 'apis/api/commissions';

function commissions({ path }) {
  // const params = useParams();
  const [commissions, setCommissions] = useState(null);
  console.log(path);

  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/commission/${id}`);
    window.location.reload();
  };

  useEffect(() => {
    const fetch = async () => {
      let apiPath = '';
      switch (path) {
        case 'view':
          apiPath = '/commission?page=1&size=10&sort=viewCount,desc';
          break;
        default:
          apiPath = '/commission?page=1&size=10&sort=commissionId,desc';
          break;
      }
      console.log(apiPath);
      const data = await getSortCommissions(apiPath);
      setCommissions(data);
    };
    fetch();
  }, [path, setCommissions]);
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
  /* gap: 1rem; */
  max-width: 100%;
`;

const TagBox = styled.div`
  display: flex;
`;

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

export default commissions;
