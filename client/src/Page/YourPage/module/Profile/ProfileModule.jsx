import Button from 'Components/Button';
import Typography from 'Components/Typography';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageComponent from 'Components/ImageComponent';

function ProfileModule({ info }) {
  return (
    <StyledContainer>
      <Button
        text="수정"
        addStyle={{
          borderRadius: 'half',
          width: 'w_s',
          height: 'h_xs',
          row: '1 / span 1',
          backgroundColor: 'white',
          border: '1px',
        }}
      />
      <StyledImgContainer>
        {info.image ? (
          <ImageComponent src={info.image} alt="프로필 사진" width="l" />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 250 }} />
        )}
      </StyledImgContainer>
      {info && (
        <>
          <Typography text={info.nickname} size="xxxl" bold="bold" />
          <Typography
            text={`since ${info.createdAt.substr(0, 10)}`}
            color="gray_3"
            line={25}
            lineHeight="l"
          />
        </>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.aside`
  display: grid;
  height: fit-content;
  grid-column: 9 / span 4;
  padding: 2rem;
  gap: 2rem;
  background-color: #f5e8dd;
  border-radius: 0.25rem;
  margin-top: 6rem;
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ProfileModule;
