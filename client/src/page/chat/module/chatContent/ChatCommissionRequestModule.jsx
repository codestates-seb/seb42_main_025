import ImageComponent from 'component/ImageComponent';
import styled from 'styled-components';
import Typography from 'component/Typography';

function ChatCommissionRequestModule({ info }) {
  return (
    <StyledSummaryBox>
      <StyledCommissionContainer>
        <Typography text={info.title} bold="bold" line={1} size="l" variant="h3" width="w_xl" />
        <ImageComponent src={info.image} alt={info.title} width="m" imgStyle="commission" />
      </StyledCommissionContainer>
      <StyledTradeContainer>
        <Typography
          text={info.subtitle}
          line={2}
          size="l"
          bold="bold"
          variant="h4"
          lineHeight="xl"
          width="w_xxl"
          space="normal"
        />
        <Typography
          text={info.content}
          line={3}
          size="m"
          variant="p"
          lineHeight="xl"
          width="w_xxl"
        />
      </StyledTradeContainer>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 28rem;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
  margin-bottom: 0.25rem;
`;

const StyledCommissionContainer = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledTradeContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 0.5rem;
`;

export default ChatCommissionRequestModule;
