import styled from 'styled-components';
import StateComponent from 'component/StateComponent';
import TitleComponent from 'component/Text/TitleComponent';
import SmallTextComponent from 'component/Text/SmallTextComponent';

function ProgressListSingleModule() {
  const image = [
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
  ];
  return (
    <>
      <StyledContainer>
        <StyledStateContainer>
          <StateComponent state={'red'} />
        </StyledStateContainer>
        <StyledTitleContainer>
          <TitleComponent title="커미션 제목" />
        </StyledTitleContainer>
        {image.map((el, idx) => (
          <StyledImg src={el} key={idx} alt={el} />
        ))}
        <StyledCommission>
          <TitleComponent title="신청폼제목" fontSize={'1.25rem'} />
          <StyledCommissionContent>신청폼내용</StyledCommissionContent>
        </StyledCommission>
        <StyledClient>{'신청자'}</StyledClient>
        <StyledDate>
          <SmallTextComponent smallText={'2023-03-15'} />
        </StyledDate>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  border: 1px solid #000;
  margin: 1rem 0;
  padding: 0.5rem;
`;

const StyledStateContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
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
  border: 1px solid #000;
  padding: 0.5rem;
`;

const StyledCommissionContent = styled.div`
  margin: 0.5rem 0 0 0.5rem;
`;

const StyledClient = styled.div`
  display: grid;
  grid-column: 11 / span 2;
  grid-row: 1 / span 2;
  align-items: center;
  font-weight: bold;
`;

const StyledDate = styled.div`
  display: grid;
  grid-column: 11 / span 2;
  grid-row: 3 / span 1;
  justify-items: end;
`;
export default ProgressListSingleModule;
