import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressModule from './module/Progress/ProgressModule';
import ProfileModule from './module/Profile/ProfileModule';
import CommissionsListModule from './module/Commissions/CommissionsListModule';
import ChatModule from './module/Chat/ChatModule';
import { useEffect, useState } from 'react';
import { getUserInfo } from 'apis/api/user';
import { useRecoilState } from 'recoil';
import { currentMemberId } from 'state';

function Mypage() {
  const [memberId] = useRecoilState(currentMemberId);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getUserInfo(memberId));
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
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(6rem, auto);
  gap: 5rem 2rem;
`;

export default Mypage;
