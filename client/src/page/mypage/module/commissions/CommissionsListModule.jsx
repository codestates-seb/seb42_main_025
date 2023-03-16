import TitleComponent from 'component/Text/TitleComponent';
import styled from 'styled-components';
import ComponentBox from 'component/ComponentBox';

function CommissionsListModule() {
  const info = {
    image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
    title: '커미션 제목',
    content: '커미션 내용',
  };
  return (
    <>
      <TitleComponent title="커미션 목록" fontSize="1.5rem" underbar="yes" row="5 / span 1" />
      {/* <TitleComponent title="커미션 목록" fontSize="1.5rem" underbar="yes" /> */}
      {/* 로그인 x */}
      <StyledContainer>
        <ComponentBox mode="AUTHOR_COMMISSION_LIST" info={info} />
        <ComponentBox mode="AUTHOR_COMMISSION_LIST" info={info} />
        <ComponentBox mode="AUTHOR_COMMISSION_LIST" info={info} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.article`
  display: grid;
  grid-column: 1 / span 7;
  justify-items: center;
  padding: 2rem;
  gap: 1rem;
  border: 1px solid #000;
  grid-template-columns: repeat(2, 1fr);
`;

export default CommissionsListModule;
