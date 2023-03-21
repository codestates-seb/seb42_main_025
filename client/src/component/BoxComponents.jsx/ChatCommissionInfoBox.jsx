import styled from 'styled-components';
import ImageComponent from 'component/ImageComponent';
import Typography from 'component/Text/Typography';

function ChatCommissionInfoBox({ info }) {
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
        margin="xs"
        lineHeight="xl"
      />
      <Typography
        text={info.content}
        variant="a"
        line={12}
        height="h_xxxl"
        space="normal"
        margin="xs"
        lineHeight="l"
      />
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export default ChatCommissionInfoBox;
