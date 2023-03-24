import styled from 'styled-components';
import ProgressListSingleModule from './ProgressListSingleModule';
import Typography from 'component/Typography';
import Button from 'component/Button';
import { useState } from 'react';

function ProgressListModule() {
  const [isMore, setIsMore] = useState(false);
  const moreClicked = () => {
    setIsMore(!isMore);
    console.log(isMore);
  };

  return (
    <StyledContainer>
      <StyledHeaderArea>
        <Typography text="신청 의뢰" variant="h3" size="l" bold="bold" />
        <div>{3}</div>
      </StyledHeaderArea>
      <StyledListBox>
        <ProgressListSingleModule />
        <ProgressListSingleModule />
      </StyledListBox>
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

const StyledListBox = styled.ul``;

const StyledButtonArea = styled.div`
  display: grid;
  justify-content: center;
`;

export default ProgressListModule;
