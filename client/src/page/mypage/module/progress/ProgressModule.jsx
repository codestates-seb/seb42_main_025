import styled from 'styled-components';
import ProgressListModule from './ProgressListModule';
import Typography from 'component/Typography';
import { getCommissionsFn } from 'useFetch/commissionFetch';
import { useState } from 'react';

function ProgressModule({ currentMemberInfo }) {
  const [commissionsFilter, setCommissionsFilter] = useState([]);

  if (getCommissionsFn() !== null) {
    setCommissionsFilter(
      getCommissionsFn().filter(el => el.memberEmail === currentMemberInfo.email)
    );
  }

  console.log(commissionsFilter);

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
      {currentMemberInfo.map}
      <StyledListContainer>
        <ProgressListModule />
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
