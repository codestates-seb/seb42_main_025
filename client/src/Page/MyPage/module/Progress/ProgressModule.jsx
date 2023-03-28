import styled from 'styled-components';
import ProgressListModule from './ProgressListModule';
import Typography from 'Components/Typography';
import { getTradeFn } from 'customHook/getTradeFetch';
// import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProgressModule({ info }) {
  const isPage = 1;

  const params = useParams();

  const authorData = { email: info.email, page: isPage };
  const memberData = { memberId: params.id, page: isPage };

  let tradeInfo;

  if (info.roles[0] === 'AUTHOR') {
    tradeInfo = getTradeFn(authorData);
  } else {
    tradeInfo = getTradeFn(memberData);
  }

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
      {tradeInfo[0] && (
        <StyledListContainer>
          <ProgressListModule infos={tradeInfo[0].pending} />
          <ProgressListModule infos={tradeInfo[1].proceeding} />
          <ProgressListModule infos={tradeInfo[2].done} />
        </StyledListContainer>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  grid-column: 1 / span 8;
  padding-bottom: 5rem;
  border-bottom: 1px solid #cecece;
`;

const StyledListContainer = styled.ul`
  padding: 1rem;
  list-style: none;
`;

const TitleContainer = styled.div`
  display: flex;
  height: fit-content;
  align-items: flex-end;
`;

export default ProgressModule;
