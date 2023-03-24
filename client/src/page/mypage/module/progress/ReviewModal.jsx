import styled from 'styled-components';
import TextEditor from 'component/Editor';
import Button from 'component/Button';

function ReviewModal({ openReviewerHandler }) {
  return (
    <StyledContainer onClick={openReviewerHandler}>
      <ModalView onClick={e => e.stopPropagation()}>
        <StyledContent>
          <StyledModalButton onClick={openReviewerHandler}>{'x'}</StyledModalButton>
          <StyledMain>
            <TextEditor />
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
  height: 50%;
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
