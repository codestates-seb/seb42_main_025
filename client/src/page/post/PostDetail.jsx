import styled from 'styled-components';
import Button from 'component/Buttons/Button';

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
          <Button
            text="신청하기"
            addStyle={{
              padding: '11px',
              borderRadius: '10px',
              fontSize: '24px',
            }}
          />
        </Enroll>
      </Summary>
    </>
  );
}

const Summary = styled.div`
  padding: 30px 30px 0px 30px;
`;

const Title = styled.div`
  min-height: 75px;
  font-weight: 700;
  font-size: 25px;
`;

const Tag = styled.div``;

const PostSummary = styled.div`
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

export default PostDetail;
