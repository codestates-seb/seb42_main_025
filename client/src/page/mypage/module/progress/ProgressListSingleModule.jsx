import styled from 'styled-components';
import StateComponent from 'component/StateComponent';
import Typography from 'component/Typography';
import Button from 'component/Button';
import ProgressTradeListModule from './ProgressTradeListModule';
import ImageComponent from 'component/ImageComponent';
import { useState } from 'react';
import ReviewModal from './ReviewModal';

function ProgressListSingleModule() {
  const image = [
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const openReviewerHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <StyledContainer>
        <StateComponent state="red" />
        <StyledCommissionContainer>
          <Typography text="커미션 제목커미션 제목제목" bold="bold" line={1} margin="xxs" />
          <StyledImgContainer>
            {image.map((el, idx) =>
              idx < 2 ? <ImageComponent src={el} key={idx} width="s" alt={el} /> : null
            )}
          </StyledImgContainer>
        </StyledCommissionContainer>
        <StyledCommission>
          <ProgressTradeListModule
            info={{
              title: '신청폼제목',
              content:
                '신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용신청폼내용',
            }}
          />
        </StyledCommission>
        <StyledClient>
          <Typography text="신청자" bold="bold" line={1} padding="xxs" space="nowrap" />
          <Typography text="2023-03-15" size="m" color="gray_3" space="nowrap" />
        </StyledClient>
      </StyledContainer>
      <StyledButtonContainer>
        <Button
          text="채팅"
          addStyle={{
            borderRadius: 'half',
            padding: '0.5rem 1rem',
            margin: '0.5rem',
            backgroundColor: 'tea_2',
            border: '1px',
            borderColor: 'tea_1',
            color: 'white',
          }}
        />
        <StyledRigntButtons>
          <Button
            text="수락"
            addStyle={{
              borderRadius: 'half',
              padding: '0.5rem 1rem',
              margin: '0.5rem',
              backgroundColor: 'tea_2',
              border: '1px',
              borderColor: 'tea_1',
              color: 'white',
            }}
          />
          <Button
            text="거절"
            addStyle={{
              borderRadius: 'half',
              padding: '0.5rem 1rem',
              margin: '0.5rem',
              border: '1px',
              borderColor: 'black',
            }}
          />
          <Button
            text="리뷰작성"
            handleClick={openReviewerHandler}
            addStyle={{
              borderRadius: 'half',
              padding: '0.5rem 1rem',
              margin: '0.5rem',
              backgroundColor: 'tea_2',
              border: '1px',
              borderColor: 'tea_1',
              color: 'white',
            }}
          />
          {isOpen === true ? <ReviewModal openReviewerHandler={openReviewerHandler} /> : null}
        </StyledRigntButtons>
      </StyledButtonContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const StyledCommissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding-right: 0.5rem;
`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const StyledCommission = styled.div`
  display: flex;
  flex: 10;
`;

const StyledClient = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 3;
  gap: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRigntButtons = styled.div`
  display: flex;
`;

export default ProgressListSingleModule;
