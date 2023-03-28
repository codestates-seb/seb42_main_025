import styled from 'styled-components';
import { Container } from 'Container/Container';
import ProgressModule from './module/Progress/ProgressModule';
import ProfileModule from './module/Profile/ProfileModule';
import CommissionsListModule from './module/Commissions/CommissionsListModule';
import ChatModule from './module/Chat/ChatModule';
import { getMemberInfoFn } from 'useFetch/getMemberInfoFetch';


function MyPage() {
  const currentMemberInfo = getMemberInfoFn();

  console.log(currentMemberInfo);

  return (
    <Container>
      {currentMemberInfo && (
        <StyledContents>
          <ProgressModule info={currentMemberInfo} />
          <ProfileModule info={currentMemberInfo} />
          {currentMemberInfo.roles[0] === 'AUTHOR' ? (
            <CommissionsListModule info={currentMemberInfo} />
          ) : null}
          <ChatModule info={currentMemberInfo} />
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

export default MyPage;
