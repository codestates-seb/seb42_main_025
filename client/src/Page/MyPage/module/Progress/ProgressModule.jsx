import styled from 'styled-components';
import ProgressListModule from './ProgressListModule';
import Typography from 'Components/Typography';

export function ProgressModule({ info }) {
  return (
    <StyledContainer>
      <TitleContainer>
        <Typography
          variant="h2"
          text="진행목록"
          size="xl"
          bold="bold"
          space="nowrap"
          color="tea_2"
          padding="m"
        />
      </TitleContainer>
      <StyledListContainer>
        <ProgressListModule />
        <ProgressListModule />
      </StyledListContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-column: 1 / span 8;
  grid-row: span 3;
`;

const StyledListContainer = styled.ul`
  padding: 1rem;
  list-style: none;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export default ProgressModule;
