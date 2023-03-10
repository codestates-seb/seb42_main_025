import styled from 'styled-components';
import { Container } from 'container/Container';
import Carousel from 'component/Carousel';
import PostButton from 'component/Buttons/PostButton';

const Content = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 700px;
  min-width: 1280px;
`;

const IMGS = styled.div`
  /* background-color: aqua; */
  flex-grow: 1;
`;

const Summary = styled.div`
  padding: 50px 0px 50px 0px;
  /* background-color: #ddba9d; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const Title = styled.div`
  min-height: 75px;
  margin: 20px;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.1;
`;

const Tag = styled.div`
  margin-left: 40px;
`;

const PostSummary = styled.div`
  margin: 20px;
  height: 250px;
`;

const Author = styled.div`
  margin: 20px 0px 0px 40px;
`;

const Enroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DetailReviewBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #ddba9d;
  border-radius: 5px;
  white-space: nowrap;
  font-weight: bold;
  color: #fff;
  height: 50px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  min-height: 100px;
  padding-top: 10px;
`;

const ReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const ReviewDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
`;

function Post() {
  return (
    <Container>
      <div>
        <Content>
          <IMGS>
            <Carousel />
          </IMGS>
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
        </Content>
        <DetailReviewBox>
          <div>상세설명</div>
          <div>리뷰</div>
        </DetailReviewBox>
        <Detail>상세설명</Detail>
        <Edit>
          <PostButton value="수정" />
          <PostButton value="삭제" />
        </Edit>
        <Review>
          <ReviewTitle>리뷰</ReviewTitle>
          <ReviewDetail>아직 작성된 리뷰가 없습니다</ReviewDetail>
        </Review>
        <div>다른 커미션들</div>
      </div>
    </Container>
  );
}

export default Post;
