import Typography from 'Components/Typography';
import ImageComponent from 'Components/ImageComponent';
import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';
import { useNavigate } from 'react-router-dom';

function CommissionListSingleModule({ info }) {
  const navigate = useNavigate();

  const handleCommission = e => {
    const id = e.target.id;
    navigate(`/commission/${id}`);
  };

  return (
    <StyledSummaryBox id={info.commissionId} onClick={handleCommission}>
      {info && (
        <>
          <ImageComponent src={info.imageUrl[1]} alt={info.title} imgStyle="commission" width="m" />
          <TextContainer>
            <Typography text={info.title} bold="bold" line={1} size="l" variant="h3" />
            <Typography text={info.content} line={2} size="m" lineHeight="l" variant="p" />

            <TagComponent tags={info.tags} />
          </TextContainer>
        </>
      )}
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 8.5rem;
  padding: 0.5rem 1rem;
  gap: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 #999999;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

const TextContainer = styled.div`
  display: grid;
  width: 100%;
  padding-top: 0.5rem;
  gap: 0.5rem;
`;

// const StyledTags = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
export default CommissionListSingleModule;
