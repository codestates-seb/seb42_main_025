import styled from 'styled-components';
import Button from 'component/Buttons/Button';
import PostDetail from './PostDetail';
import Review from './Review';
import Commission from 'page/home/Commission';
import Food from 'assets/1.JPG';

function Post() {
  return (
    <Container>
      <Content>
        <ImgBox>
          <Img src={Food} alt="navExploreLogo" />
        </ImgBox>
        <PostDetailBox>
          <PostDetail />
        </PostDetailBox>
        <DetailBox>
          <DetailReviewBox>
            <div>상세설명</div>
            <div>리뷰</div>
          </DetailReviewBox>
          <Detail>상세설명</Detail>
        </DetailBox>
        <Edit>
          <Edit1>
            <Button
              text="수정"
              addStyle={{
                padding: '11px',
                borderRadius: '10px',
                fontSize: '24px',
              }}
            />
          </Edit1>
          <Edit2>
            <Button
              text="삭제"
              addStyle={{
                padding: '11px',
                borderRadius: '10px',
                fontSize: '24px',
              }}
            />
          </Edit2>
        </Edit>
        <ReviewBox>
          <Review />
        </ReviewBox>
        <CommissionBox>
          <div>비슷한 커미션들</div>
          <Commission />
        </CommissionBox>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 5rem;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(12, 1fr); //repeat(6, 1fr)은 1fr 1fr 1fr 1fr 1fr 1fr과 같아요.
  grid-template-rows: repeat(5, minmax(50px, auto));
  gap: 1rem;
`;

const ImgBox = styled.div`
  grid-column: 1 / span 8;
  grid-row: 1 / span 1;
`;

const Img = styled.img`
  max-width: 853px;
`;

const PostDetailBox = styled.div`
  grid-column: 9 / span 4;
  grid-row: 1 / span 1;
`;

const DetailBox = styled.div`
  grid-column: 1 / span 12;
  grid-row: 2 / span 1;
`;

const DetailReviewBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ddba9d;
  border-radius: 5px;
  white-space: nowrap;
  font-weight: bold;
  color: #fff;
  height: 50px;
  margin-top: 5rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Edit = styled.div`
  display: grid;
  grid-column: 11 / span 2;
  grid-row: 3 / span 1;
  margin: 5rem 0px 5rem 0px;
`;

const Edit1 = styled.div`
  grid-column: 11 / span 1;
  grid-row: 3 / span 1;
`;

const Edit2 = styled.div`
  grid-column: 12 / span 1;
  grid-row: 3 / span 1;
`;

const ReviewBox = styled.div`
  grid-column: 1 / span 12;
  grid-row: 4 / span 1;
  flex-wrap: wrap;
  line-height: 1.6;
`;

const CommissionBox = styled.div`
  grid-column: 1 / span 12;
  grid-row: 5 / span 1;
  flex-wrap: wrap;
  line-height: 1.7;
`;

export default Post;
