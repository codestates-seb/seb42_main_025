import styled from 'styled-components';
import { Container } from 'Container/Container';
import ProgressModule from './module/Progress/ProgressModule';
import ProfileModule from './module/Profile/ProfileModule';
import CommissionsListModule from './module/Commissions/CommissionsListModule';
import ChatModule from './module/Chat/ChatModule';
import { getMemberInfoFn } from 'customHook/getMemberInfoFetch';
import { useParams } from 'react-router-dom';
import LoadingComponent from 'Components/LoadingComponent';

function YourPage() {
  const { id } = useParams();
  const { currentMemberInfo, loading } = getMemberInfoFn(id);

  return (
    <Container>
      {loading || !currentMemberInfo.data ? (
        <LoadingComponent />
      ) : (
        <StyledContents>
          <ProgressModule info={currentMemberInfo.data} />
          <ProfileModule info={currentMemberInfo.data} />
          {currentMemberInfo.data.roles[0] === 'AUTHOR' ? (
            <CommissionsListModule info={currentMemberInfo.data} />
          ) : null}
          <ChatModule info={currentMemberInfo.data} />
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

export default YourPage;
