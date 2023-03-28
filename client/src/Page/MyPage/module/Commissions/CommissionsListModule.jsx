import Button from 'Components/Button';
import Typography from 'Components/Typography';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CommissionListSingleModule from './CommissionListSingleModule';
import { getMemberCommissionFn } from 'useFetch/getMemberCommissionFetch';

function CommissionsListModule() {
  const navigate = useNavigate();
  const info = getMemberCommissionFn();

  const handleClick = () => {
    navigate('/create-commission');
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <Typography
          variant="h2"
          text="커미션 목록"
          size="xl"
          bold="bold"
          space="nowrap"
          color="tea_2"
          padding="m"
        />
        <Button
          text="커미션등록"
          handleClick={handleClick}
          addStyle={{
            padding: '0.5rem 1rem',
            backgroundColor: 'tea_1',
            height: 'h_s',
            color: 'white',
          }}
        />
      </StyledHeader>
      {/* <TitleTypography text="커미션 목록"/> */}
      {/* 로그인 x */}
      <CommissionListContainer>
        {info && info.map((el, idx) => <CommissionListSingleModule key={idx} info={el} />)}
        {info && info.length ? null : <Typography text="현재 등록된 커미션이 없습니다." />}
      </CommissionListContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 7;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommissionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2rem;
  gap: 1rem;
  background-color: #ececec;
`;

export default CommissionsListModule;
