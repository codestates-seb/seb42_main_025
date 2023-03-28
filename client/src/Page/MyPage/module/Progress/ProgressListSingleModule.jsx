import styled from 'styled-components';
import StateComponent from 'Components/StateComponent';
import Typography from 'Components/Typography';
import Button from 'Components/Button';
import ProgressTradeListModule from './ProgressTradeListModule';
import ImageComponent from 'Components/ImageComponent';
import { useState } from 'react';
import { ReviewModal } from './ReviewModal';
// import { getMemberSubInfoFn } from 'customHook/getMemberInfoFetch';

function ProgressListSingleModule() {
  const image = [
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openReviewerHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickedStatus = e => {
    console.log(e);
  };

  const newInfos = getMemberSubInfoFn(infos);

  console.log(newInfos);

  console.log(infos);
  infos.map((info, idx) => {
    if (
      info.member !== null &&
      info.member !== undefined &&
      info.commission !== null &&
      info.commission !== undefined
    ) {
      console.log(info);
      return (
        <StyledContainer key={info.tradeId + idx}>
          <StyledComponentContainer>
            <StateComponent state={info.status} />
            <StyledCommissionContainer>
              <Typography text={info.title} bold="bold" line={1} margin="xxs" />
              <StyledImgContainer>
                {info.commission.imageUrl.map((el, idx) =>
                  idx % 2 === 0 && idx < 4 ? (
                    <ImageComponent src={el} key={idx + el} width="s" alt={el} />
                  ) : null
                )}
              </StyledImgContainer>
            </StyledCommissionContainer>
            <StyledCommission>
              <ProgressTradeListModule info={info} />
            </StyledCommission>
            <StyledClient>
              <Typography
                text={info.member.nickname}
                bold="bold"
                line={1}
                padding="xxs"
                space="nowrap"
              />
              <Typography
                text={info.createdAt.substr(0, 10)}
                size="m"
                color="gray_3"
                space="nowrap"
              />
            </StyledClient>
          </StyledComponentContainer>
          {info.status === '수락대기' ? (
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
              <StyledRightButtons>
                <Button
                  text="수락"
                  handleClick={clickedStatus}
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
              </StyledRightButtons>
            </StyledButtonContainer>
          ) : info.status === '진행 중' ? (
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
            </StyledButtonContainer>
          ) : info.status === '완료' ? (
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
            </StyledButtonContainer>
          ) : null}
        </StyledContainer>
      );
    }
  });
}

const StyledContainer = styled.div``;

const StyledComponentContainer = styled.div`
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

const StyledRightButtons = styled.div`
  display: flex;
`;

export default ProgressListSingleModule;
