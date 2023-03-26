import Typography from 'Components/Typography';
import ImageComponent from 'Components/ImageComponent';
import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';

function CommissionListSingleModule({ info }) {
  return (
    <StyledSummaryBox>
      <ImageComponent src={info.image} alt={info.title} imgStyle="commission" width="m" />
      <TextContainer>
        <Typography text={info.title} bold="bold" line={1} size="l" variant="h3" />
        <Typography text={info.content} line={2} size="m" variant="p" lineHeight="l" />
        <TagComponent text={info.tags} />
      </TextContainer>
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
  white-space: nowrap;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 #999999;
`;

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
`;
export default CommissionListSingleModule;
