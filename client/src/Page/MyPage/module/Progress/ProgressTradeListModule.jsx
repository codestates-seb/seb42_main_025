import Typography from 'Components/Typography';
import styled from 'styled-components';

export function ProgressTradeListModule({ info }) {
  console.log(info);

  return (
    <StyledSummaryBox>
      <Typography text={info.title} bold="bold" line={1} size="l" variant="h3" />
      <Typography text={info.content} line={1} size="m" variant="p" />
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  max-height: 4rem;
  padding: 0 1rem;
  gap: 0.5rem;
  white-space: nowrap;
  border-left: 1px solid #cecece;
`;

export default ProgressTradeListModule;
