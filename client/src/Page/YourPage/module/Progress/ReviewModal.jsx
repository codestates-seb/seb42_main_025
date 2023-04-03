import styled from 'styled-components';
import TextEditor from 'Components/Editor';
import Button from 'Components/Button';
import { useEffect, useRef, useState } from 'react';

export function ReviewModal({ openReviewerHandler }) {
  const [currentWidth, setCurrentWidth] = useState();
  const ref = useRef(null);

  const toolbarItems =
    currentWidth < 700
      ? currentWidth < 500
        ? [[]]
        : [['heading', 'bold', 'italic', 'strike']]
      : [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
        ];

  useEffect(() => {
    setCurrentWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current, setCurrentWidth]);

  return (
    <StyledContainer onClick={openReviewerHandler}>
      <ModalView onClick={e => e.stopPropagation()} ref={ref}>
        <StyledContent>
          <StyledModalButton onClick={openReviewerHandler}>{'x'}</StyledModalButton>
          <StyledMain>
            <TextEditor currentWidth={currentWidth} toolbarItems={toolbarItems} />
          </StyledMain>
          <StyledSubButton>
            <Button
              text="리뷰 등록"
              addStyle={{
                fontSize: 'm',
                padding: '0 1rem',
                backgroundColor: 'tea_1',
                color: 'white',
              }}
            />
          </StyledSubButton>
        </StyledContent>
      </ModalView>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 50%;
  min-width: 20rem;
  height: 50%;
  min-height: 20rem;
  flex-direction: column;
  padding: 0.5rem 2rem 1.5rem 2rem;
  border-radius: 0.5rem;
`;

const StyledModalButton = styled.div`
  display: flex;
  justify-content: end;
  font-size: 2rem;
  cursor: pointer;
  flex: 1;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex: 9;
`;

const StyledSubButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  flex: 2;
`;
export default ReviewModal;
