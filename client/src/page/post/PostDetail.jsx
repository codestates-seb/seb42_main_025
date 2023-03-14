import styled from 'styled-components';
import PostButton from 'component/Buttons/PostButton';

const Summary = styled.div`
  padding: 30px 30px 0px 30px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Title = styled.div`
  min-height: 75px;
  font-weight: 700;
  font-size: 25px;
`;

const Tag = styled.div``;

const PostSummary = styled.div`
  display: flex;
  /* align-items: center; */
  /* background-color: #ddba9d; */
  justify-content: center;
  height: 350px;
`;

const Author = styled.div`
  margin-top: 3rem;
`;

const Enroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PostDetail() {
  return (
    <>
      <Summary>
        <Title>
          <div>제목</div>
        </Title>
        <div>
          <PostSummary>내용</PostSummary>
          <Tag>tag</Tag>
          <Author>작가</Author>
        </div>
        <Enroll>
          <PostButton value="신청하기" />
        </Enroll>
      </Summary>
    </>
  );
}

export default PostDetail;
