import styled from 'styled-components';
import { Container } from 'container/Container';

const Content = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 10px;
  height: 700px;
  min-width: 1280px;
`;

const IMGS = styled.div`
  background-color: aqua;
  flex-grow: 1;
`;

const Summary = styled.div`
  background-color: #ddba9d;
  margin-left: 100px;
  flex-grow: 1;
`;

const Title = styled.div`
  width: 100px;
`;
const Tag = styled.div`
  padding-top: 2px;
`;

const PostSummary = styled.div`
  padding-top: 2px;
`;

const Author = styled.div`
  padding-top: 2px;
`;

function Post() {
  return (
    <Container>
      <div>
        <Content>
          <IMGS>이미지들</IMGS>
          <Summary>
            <Title>제목</Title>
            <Tag>태그</Tag>
            <PostSummary>내용</PostSummary>
            <Author>신청하기</Author>
          </Summary>
        </Content>
        <div>상세설명</div>
        <div>수정삭제</div>
        <div>다른 커미션들</div>
      </div>
    </Container>
  );
}

export default Post;
