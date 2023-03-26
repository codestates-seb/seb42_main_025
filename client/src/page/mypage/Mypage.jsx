import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressModule from './module/progress/ProgressModule';
import ProfileModule from './module/profile/ProfileModule';
import CommissionsListModule from './module/commissions/CommissionsListModule';
import ChatModule from './module/chat/ChatModule';
import { getMemberInfoFn } from 'useFetch/getMemberInfoFetch';

function Mypage() {
  const currentMemberInfo = getMemberInfoFn();

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
