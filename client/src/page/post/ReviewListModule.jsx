import ImageComponent from 'component/ImageComponent';
import Typography from 'component/Text/Typography';
import styled from 'styled-components';

function ReviewListModule({ info }) {
  return (
    <StyledSummaryBox>
      <Typography text={info.content} variant="p" flex={19} line={1} height="h_s" />
      <ImageComponent src={info.image} alt={info.title} width="xs" imgStyles="user" />
      <StyledWriter>{info.writer}</StyledWriter>
      <StyledDate>{info.date}</StyledDate>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0.5rem 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
  white-space: nowrap;
`;

const StyledWriter = styled.div`
  display: flex;
  flex: 2;
`;

const StyledDate = styled.div`
  display: flex;
  flex: 2;
`;

export default ReviewListModule;
