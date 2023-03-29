import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

function LoadingComponent() {
  return (
    <StyledLoadingContainer>
      <CircularProgress />
    </StyledLoadingContainer>
  );
}
const StyledLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default LoadingComponent;
