import Button from 'component/Button';
import ImageComponent from 'component/ImageComponent';
import Typography from 'component/Typography';
import styled from 'styled-components';

function ProfileModule() {
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
      <ImageComponent
        src="https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg"
        alt="프로필 사진"
        width="l"
      />
      <Typography text="닉네임" size="xl" bold="bold" />
      <Typography text="자기소개" line={25} lineHeight="l" />
    </StyledContainer>
  );
}

const StyledContainer = styled.aside`
  display: grid;
  height: fit-content;
  grid-column: 9 / span 4;
  padding: 1rem;
  gap: 2rem;
  background-color: #f5e8dd;
  border-radius: 0.25rem;
  margin-top: 6rem;
`;

export default ProfileModule;
