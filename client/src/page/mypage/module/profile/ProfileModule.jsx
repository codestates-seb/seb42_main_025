import Button from 'component/Buttons/Button';
import Typography from 'component/Text/Typography';
import TitleTypography from 'component/Text/TitleTypography';
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
      <StyledImg src="https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg" />
      <TitleTypography text="닉네임" row="3 / span 1" />
      <Typography text="자기소개" />
    </StyledContainer>
  );
}

const StyledContainer = styled.aside`
  display: grid;
  height: fit-content;
  grid-column: 9 / span 4;
  padding: 1rem;
  grid-template-rows: repeat(4, max(fit-content));
  gap: 2rem;
  background-color: #f6f6f6;
  border-radius: 0.25rem;
`;

const StyledImg = styled.img`
  grid-row: 2 / span 1;
  max-width: 100%;
`;

export default ProfileModule;
