import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressModule from './module/progress/ProgressModule';
import ProfileModule from './module/profile/ProfileModule';
import CommissionsListModule from './module/commissions/CommissionsListModule';
import ChatModule from './module/chat/ChatModule';
import customAxios from 'api/baseURL';
import { useEffect, useState } from 'react';

function Mypage() {
  const [data, setData] = useState(null);

  const getData = async () => {
    await customAxios
      .get(`/data`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  // 멤버 id와 비교 후

  return (
    <Container>
      <StyledContents>
        <ProgressModule />
        {/* <CommissionsListModule />
        <ProfileModule /> */}
        {/* 로그인 x */}
        <ProfileModule />
        <CommissionsListModule />
        <ChatModule />
      </StyledContents>
    </Container>
  );
}

const StyledContents = styled.section`
  display: grid;
  max-width: 1280px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(4rem, auto);
  gap: 3rem;
`;

export default Mypage;
