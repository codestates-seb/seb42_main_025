import styled from 'styled-components';
import ProgressListSingleModule from './ProgressListSingleModule';
import TitleComponent from 'component/Text/TitleComponent';
import TextComponent from 'component/Text/TextComponent';
import Button from 'component/Buttons/Button';
import { useState } from 'react';

function ProgressListModule() {
  const [isMore, setIsMore] = useState(false);
  const moreClicked = () => {
    setIsMore(!isMore);
    console.log(isMore);
  };

  return (
    <StyledContainer>
      <StyeldHeaderArea>
        <TitleComponent title="신청 의뢰" fontSize={'1.25rem'} />
        <TextComponent text={'2'} />
      </StyeldHeaderArea>
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
              width: 'fit-content',
              height: 'fit-content',
              padding: 'none',
              backgroundColor: 'transparent',
            }}
          />
        ) : (
          <Button
            text="더보기"
            handleClick={moreClicked}
            addStyle={{
              width: 'fit-content',
              height: 'fit-content',
              padding: 'none',
              backgroundColor: 'transparent',
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
  padding: 1rem;
  list-style: none;
`;

const StyeldHeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledListBox = styled.ul``;

const StyledButtonArea = styled.div`
  display: grid;
  justify-content: center;
`;

export default ProgressListModule;
