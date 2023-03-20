import Button from 'component/Buttons/Button';
import TextComponent from 'component/Text/TextComponent';
import TitleComponent from 'component/Text/TitleComponent';
import styled from 'styled-components';

function ProfileModule() {
  return (
    <StyledContainer>
      <Button
        text="수정"
        addStyle={{
          borderRadius: '5rem',
          width: 'fit-content',
          height: 'fit-content',
          row: '1 / span 1',
        }}
      />
      <StyledImg src="https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg" />
      <TitleComponent title="닉네임" row="3 / span 1" fontSize="1.5rem" />
      <TextComponent text="자기소개" />
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
`;

const StyledImg = styled.img`
  grid-row: 2 / span 1;
  max-width: 100%;
`;

export default ProfileModule;
