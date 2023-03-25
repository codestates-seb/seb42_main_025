import Button from 'component/Button';
import Typography from 'component/Typography';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CommissionListSingleModule from './CommissionListSingleModule';
import { getCommissions } from 'apis/api/commissions';
import { useEffect, useState } from 'react';

function CommissionsListModule() {
  const [commission, setCommission] = useState(null);

  const navigate = useNavigate();
  const info = [
    {
      image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
      title: '커미션 제목커미션 제목커미션 제목',
      content: '커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용커미션 내용',
    },
  ];

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions();
      setCommission(data);
    };
    fetch();
  }, []);

  console.log(commission);

  const handleClick = () => {
    navigate('/createcommission');
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
        {info.map((el, idx) => (
          <CommissionListSingleModule key={idx} info={el} />
        ))}
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
