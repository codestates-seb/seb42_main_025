import styled from 'styled-components';
import ImageComponent from 'component/ImageComponent';
import Typography from 'component/Text/Typography';

function ChatCommissionInfoModule({ info }) {
  return (
    <StyledSummaryBox>
      <ImageComponent src={info.image} alt={info.title} width="l" imgStyle="commission" />
      <Typography
        text={info.title}
        variant="h2"
        bold="bold"
        size="l"
        line={2}
        height="h_l"
        space="normal"
        lineHeight="xl"
      />
      <Typography
        text={info.content}
        variant="p"
        line={12}
        height="h_xxxl"
        space="normal"
        lineHeight="l"
      />
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
`;

export default ChatCommissionInfoModule;
