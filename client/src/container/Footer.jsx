import styled from 'styled-components';
import mainLogo from 'assets/Main_logo.png';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <Container>
        <UpDownBox>
          <Up>
            <Logo>
              <img src={mainLogo} width={110} alt="logo" />
            </Logo>
            <MakerBox>
              <GithubLink href="https://github.com/codestates-seb/seb42_main_025/tree/main">
                {/* <button onClick={() => window.open('[url 링크]', '_blank')}> 새 탭으로 이동 사용해보기 */}
                <Github />
              </GithubLink>
              <Maker href="https://github.com/Eunjinshin">신은진 |</Maker>
              <Maker href="https://github.com/SeungbaeLee">이승배 |</Maker>
              <Maker href="https://github.com/JiSun11">김지선 |</Maker>
              <Maker href="https://github.com/hojju">정호준 |</Maker>
              <Maker href="https://github.com/Diiiiiikey">최도경 |</Maker>
              <Maker href="https://github.com/rainhu7">윤동수 |</Maker>
              <Maker href="https://github.com/benidene">이현동</Maker>
            </MakerBox>
          </Up>
          <Down>
            <Copyright>
              <div>
                (주)밀크버블티는 통신거래중개자이며, 통신거래의 당사자가 아닙니다. 상품, 상품정보,
                거래에 관한 의무와 책임은 거래회원에게 있습니다.
              </div>
              <div>© copyright 2023. 밀크버블티 All rights reserved.</div>
            </Copyright>
          </Down>
        </UpDownBox>
      </Container>
    </>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  background-color: #ddba9d;
  width: 100%;
`;

const UpDownBox = styled.footer`
  width: 100%;
  max-width: 1280px;
`;

const Up = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  border-bottom: 1px solid gray;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const MakerBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

const GithubLink = styled.a`
  color: black;
`;

const Github = styled(FaGithub)`
  font-size: 1rem;
`;

const Maker = styled.a`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  color: black;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
`;

const Down = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  line-height: 3;
  white-space: normal;
  background-color: #ddba9d;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 0.75rem;
`;

export default Footer;
