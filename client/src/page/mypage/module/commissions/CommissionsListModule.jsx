import Typography from 'component/Text/Typography';
import styled from 'styled-components';
import { CommissionListBox } from 'component/BoxComponents.jsx';

function CommissionsListModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '커미션 제목',
    content: '커미션 내용',
  };
  return (
    <StyledContainer>
      <TitleContainer>
        <Typography
          variant="h2"
          text="커미션 목록"
          size="xl"
          bold="bold"
          space="nowrap"
          color="tea_2"
          margin="s"
          height="h_s"
          row="5 / span 1"
        />
      </TitleContainer>
      {/* <TitleTypography text="커미션 목록"/> */}
      {/* 로그인 x */}
      <CommissionListContainer>
        <CommissionListBox info={info} />
        <CommissionListBox info={info} />
        <CommissionListBox info={info} />
      </CommissionListContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 7;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CommissionListContainer = styled.div`
  display: flex;
  justify-items: center;
  padding: 2rem;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  background-color: #ececec;
`;

export default CommissionsListModule;
