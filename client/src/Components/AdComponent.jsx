import styled from 'styled-components';

function AdComponent() {
  return (
    <AdBox>
      <AdLink href="https://picsum.photos/1280/180" target="_blank">
        <AdImage src="https://picsum.photos/1280/180" alt="Ad Image" />
      </AdLink>
    </AdBox>
  );
}

const AdBox = styled.div`
  grid-column: 1 / span 12;
  width: 100%;
  height: 12rem;
  margin: 1rem 0 3rem 0;
`;

const AdImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

export default AdComponent;
