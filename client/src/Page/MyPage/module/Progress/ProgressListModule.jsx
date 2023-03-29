import styled from 'styled-components';
import ProgressListSingleModule from './ProgressListSingleModule';
import Typography from 'Components/Typography';
import Button from 'Components/Button';
import { useState } from 'react';
// import { getMemberInfoFn } from 'customHook/getMemberInfoFetch';
import { getTradeSubInfoFn } from 'customHook/getTradeSubInfoFetch';
import LoadingComponent from 'Components/LoadingComponent';

export function ProgressListModule({ infos }) {
  const [isMore, setIsMore] = useState(false);

  const moreClicked = () => {
    setIsMore(!isMore);
    console.log(isMore);
  };

  const filteredInfos = getTradeSubInfoFn(infos);

  console.log(filteredInfos);

  return (
    <StyledContainer>
      {filteredInfos && filteredInfos.length === infos.length ? (
        <>
          <StyledHeaderArea>
            <Typography text="신청 의뢰" variant="h3" size="l" bold="bold" />
            {filteredInfos && <div>{filteredInfos.length}</div>}
          </StyledHeaderArea>
          {filteredInfos.map(filteredInfo => (
            <StyledListBox key={filteredInfo.tradeId}>
              <ProgressListSingleModule info={filteredInfo} />
            </StyledListBox>
          ))}
          <StyledButtonArea>
            {isMore ? (
              <Button
                text="줄이기"
                handleClick={moreClicked}
                addStyle={{
                  backgroundColor: 'transparent',
                  margin: '1.5rem 0 0 0 ',
                }}
              />
            ) : (
              <Button
                text="더보기"
                handleClick={moreClicked}
                addStyle={{
                  backgroundColor: 'transparent',
                  margin: '1.5rem 0 0 0 ',
                }}
              />
            )}
          </StyledButtonArea>
        </>
      ) : (
        <LoadingComponent />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.li`
  display: grid;
  grid-column: 1 / span 8;
  width: 100%;
  padding: 2rem 1rem;
  list-style: none;
  border-bottom: 1px solid #444444;
`;

const StyledHeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledListBox = styled.div``;

const StyledButtonArea = styled.div`
  display: grid;
  justify-content: center;
`;

export default ProgressListModule;
