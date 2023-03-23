import Typography from 'component/Typography';
import styled from 'styled-components';

function CommissionRequestModule({ info }) {
  return (
    <StyledSummaryBox>
      <StyledImg src={info.image} alt={info.title} />
      <StyledContentContainer>
        <Typography
          text={info.title}
          variant="h2"
          bold="bold"
          size="xxl"
          line={1}
          height="h_s"
          width="w_xxxxl"
        />
        <Typography
          text={info.content}
          line={4}
          variant="p"
          height="h_xl"
          width="w_xxxxl"
          lineHeight="base"
        />
      </StyledContentContainer>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1rem solid #f0d8ba;
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
  margin-left: 1.5rem;
`;

export default CommissionRequestModule;
