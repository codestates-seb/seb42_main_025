import Typography from 'Components/Typography';
import styled from 'styled-components';
import { getCommissionFn } from 'customHook/getCommissionFetch.js';
import { useParams } from 'react-router-dom';
import LoadingComponent from 'Components/LoadingComponent';

function TradeModuleBox() {
  const { id } = useParams();
  console.log(id);
  const info = getCommissionFn(id);
  console.log(info);

  return (
    <StyledSummaryBox>
      {info.commission ? (
        <>
          <StyledImg src={info.commission.imageUrl[1]} alt={info.commission.title} />
          <StyledContentContainer>
            <Typography
              text={info.commission.title}
              variant="h2"
              bold="bold"
              size="xxl"
              line={1}
              height="h_s"
              width="w_xxxxl"
            />
            <Typography
              text={info.commission.content}
              line={7}
              variant="p"
              height="h_xxl"
              width="w_xxxxl"
              lineHeight="base"
            />
          </StyledContentContainer>
        </>
      ) : (
        <LoadingComponent />
      )}
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-bottom: 3rem;
  border-bottom: 0.25rem solid #f0d8ba;
  white-space: nowrap;
`;

const StyledImg = styled.img`
  max-width: 10rem;
  height: auto;
  aspect-ratio: 4 / 3;
  align-self: center;
`;

const StyledContentContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: 2rem;
  gap: 1rem;
`;

export default TradeModuleBox;
