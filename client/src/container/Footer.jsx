import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <Wrapper>
        <Main>
          <Contents>
            상호: (주)나는 이렇게 살아왔는데 | 대표 신은진 <br />
            copyright 2023. 나는 이렇게 살아왔는데 All rights reserved.
          </Contents>
        </Main>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #ddba9d;
`;

const Contents = styled.div`
  line-height: 1.5;
`;

export default Footer;
