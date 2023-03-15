import styled from 'styled-components';
import PostButton from 'component/Buttons/PostButton';
import PostDetail from './PostDetail';
import Food from 'assets/1.JPG';

const Container = styled.div`
  padding-top: 5rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit);
`;

const Content = styled.div`
  display: flex;
  /* display: grid; */
  width: 1280px;
`;

const ImgBox = styled.div`
  /* flex-grow: 1; */
`;

const Img = styled.img`
  width: 853px;
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
  /* width: 100%; */
  background-color: #ddba9d;
  border-radius: 5px;
  white-space: nowrap;
  font-weight: bold;
  color: #fff;
  height: 50px;
  margin-top: 5rem;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          <ImgBox>
            <Img src={Food} alt="navExploreLogo" />
          </ImgBox>
          <PostDetail />
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
