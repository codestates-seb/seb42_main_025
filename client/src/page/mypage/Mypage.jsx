import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressModule from './module/Progress/ProgressModule';
import ProfileModule from './module/Profile/ProfileModule';
import CommissionsListModule from './module/Commissions/CommissionsListModule';
import ChatModule from './module/Chat/ChatModule';
import { getUserInfo } from 'apis/api/user';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Mypage() {
  const [currentMemberInfo, setCurrentMemberInfo] = useState(null);
  // const memberId = localStorage.getItem('memberId'); /** login 로직으로 memberId 받아오기 */
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserInfo(params.id);
      setCurrentMemberInfo(data);
    };
    fetch();
  }, [setCurrentMemberInfo]);

  console.log(currentMemberInfo);
  return (
    <Container>
      {currentMemberInfo && (
        <StyledContents>
          <ProgressModule currentMemberInfo={currentMemberInfo} />
          {/* <CommissionsListModule />
        <ProfileModule /> */}
          {/* 로그인 x */}
          <ProfileModule currentMemberInfo={currentMemberInfo} />
          <CommissionsListModule currentMemberInfo={currentMemberInfo} />
          <ChatModule currentMemberInfo={currentMemberInfo} />
        </StyledContents>
      )}
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
