import Typography from 'component/Text/Typography';
import styled from 'styled-components';

function ProgressRequestListBox({ info }) {
  return (
    <StyledSummaryBox>
      <Typography text={info.title} bold="bold" line={1} size="l" variant="h3" />
      <Typography text={info.content} line={2} size="m" variant="p" />
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-width: 25rem;
  width: 100%;
  max-height: 4rem;
  padding: 0 0.5rem;
  gap: 0.5rem;

  white-space: nowrap;
`;

export default ProgressRequestListBox;
