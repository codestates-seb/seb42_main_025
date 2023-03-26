import Button from 'Components/Button';
import ImageComponent from 'Components/ImageComponent';
import Typography from 'Components/Typography';
import styled from 'styled-components';

function ProfileModule({ currentMemberInfo }) {
  console.log(currentMemberInfo);
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
      <Typography text={currentMemberInfo.nickname} size="xl" bold="bold" />
      <Typography text={currentMemberInfo.email} line={25} lineHeight="l" />
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

export default ProfileModule;
