import { Container } from 'container/Container';
import styled from 'styled-components';
import Commission from 'page/home/Commission';

function SearchPage() {
  //   const searchList = () => {
  //     const filtered = sampleData.filter(itemList => {
  //       return itemList.name.toUpperCase().includes(userInput.toUpperCase());
  //     });
  //   };

  return (
    <Container>
      <Content>
        <SearchResult>
          <div>어떤 것 검색결과</div>
          <div>20 result</div>
        </SearchResult>
        <Commission1>
          <Commission>1</Commission>
        </Commission1>
        <Banner>광고배너</Banner>
        <Commission2>
          <Commission>2</Commission>
        </Commission2>
        <Commission3>
          <Commission>3</Commission>
        </Commission3>
      </Content>
    </Container>
  );
}

const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr); //repeat(6, 1fr)은 1fr 1fr 1fr 1fr 1fr 1fr과 같아요.
  grid-template-rows: repeat(5, minmax(50px, auto));
  gap: 1rem;
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
`;

const Commission1 = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / span 12;
  grid-row: 2 / span 1;
`;

const Banner = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / span 12;
  grid-row: 3 / span 1;
  height: 100px;
  align-items: center;
  background-color: coral;
`;

const Commission2 = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / span 12;
  grid-row: 4 / span 1;
`;

const Commission3 = styled.div`
  display: grid;
  justify-content: center;
  margin-top: -1rem;
  grid-column: 1 / span 12;
  grid-row: 5 / span 1;
`;

export default SearchPage;
