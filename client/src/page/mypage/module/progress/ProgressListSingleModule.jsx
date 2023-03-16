import styled from 'styled-components';
import StateComponent from 'component/StateComponent';
import TitleComponent from 'component/Text/TitleComponent';
import SmallTextComponent from 'component/Text/SmallTextComponent';
import TextComponent from 'component/Text/TextComponent';
import ComponentBox from 'component/ComponentBox';
import Button from 'component/Buttons/Button';

function ProgressListSingleModule() {
  const image = [
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
  ];
  return (
    <>
      <StyledContainer>
        <StateComponent state="red" column="1 / span 1" row="1 / span 3" />
        <StyledTitleContainer>
          <TitleComponent title="커미션 제목" />
        </StyledTitleContainer>
        {image.map((el, idx) => (
          <StyledImg src={el} key={idx} alt={el} />
        ))}
        <StyledCommission>
          <ComponentBox
            mode="PROGRESS_SUB_LIST"
            info={{ title: '신청폼제목', content: '신청폼내용' }}
          />
        </StyledCommission>
        <StyledClient>
          <TextComponent text="신청자" bold="bold" />
        </StyledClient>
        <SmallTextComponent text="2023-03-15" column="11 / span 2" row="3 / span 1" />
      </StyledContainer>
      <StyledButtonContainer>
        <Button
          text="채팅"
          addStyle={{
            borderRadius: '5rem',
            width: 'fit-content',
            height: 'fit-content',
          }}
        />
        <StyledRigntButtons>
          <Button
            text="수락"
            addStyle={{
              borderRadius: '5rem',
              width: 'fit-content',
              height: 'fit-content',
              margin: '0 0.5rem',
            }}
          />
          <Button
            text="거절"
            addStyle={{
              borderRadius: '5rem',
              width: 'fit-content',
              height: 'fit-content',
              margin: '0 0.5rem',
            }}
          />
          {/* <Button
            text="리뷰작성"
            addStyle={{
              borderRadius: '5rem',
              width: 'fit-content',
              height: 'fit-content',
            }}
          /> */}
        </StyledRigntButtons>
      </StyledButtonContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  border: 1px solid #000;
  margin: 1rem 0 0.5rem;
  padding: 0.5rem;
`;

const StyledTitleContainer = styled.div`
  grid-column: 2 / span 2;
`;

const StyledImg = styled.img`
  max-width: 3.5rem;
  grid-row: 2 / span 2;
`;

const StyledCommission = styled.div`
  grid-column: 5 / span 6;
  grid-row: 1 / span 3;
`;

const StyledClient = styled.div`
  display: grid;
  grid-column: 11 / span 2;
  grid-row: 1 / span 2;
  align-items: center;
  font-weight: bold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRigntButtons = styled.div``;
export default ProgressListSingleModule;
