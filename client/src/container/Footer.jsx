import styled from 'styled-components';

const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  background-color: #ddba9d;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
const Contents = styled.div`
  line-height: 1.5;
`;

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

export default Footer;
