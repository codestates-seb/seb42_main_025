import styled from 'styled-components';
import { useEffect } from 'react';
import { Container } from 'container/Container';
import ProgressModule from './module/progress/ProgressModule';
import ProfileModule from './module/profile/ProfileModule';
import CommissionsListModule from './module/commissions/CommissionsListModule';
import ChatModule from './module/chat/ChatModule';
// import { getUserInfo } from 'apis/api/user';

function Mypage() {
  // const memberId = localStorage.getItem('memberId');

  useEffect(() => {
    // setMember(getUserInfo(memberId));
  }, []);

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
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(6rem, auto);
  gap: 5rem 2rem;
`;

export default Mypage;
