import styled from 'styled-components';
import { ReviewListBox } from 'component/BoxComponents.jsx';

const info = {
  image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
  content: 'content',
  writer: 'writer',
  date: 'date',
};

function Review() {
  return (
    <div>
      <ReviewBox>
        <DetailReviewBox>
          <RemoveDeco href="#상세설명">상세설명</RemoveDeco>
          <RemoveDeco href="#리뷰" name="리뷰">
            리뷰
          </RemoveDeco>
        </DetailReviewBox>
        <ReviewDetail>
          {/* 아직 작성된 리뷰가 없습니다 */}
          <ReviewListBox info={info} />
        </ReviewDetail>
        {/* {reviewData.length > 0 ? (
          <ReviewListBox info={info} />
        ) : (
          <ReviewDetail>아직 작성된 리뷰가 없습니다</ReviewDetail>
        )} */}
      </ReviewBox>
    </div>
  );
}

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding-top: 10px;
`;

// const ReviewTitle = styled.a`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 10px;
//   border-bottom: 1px solid lightgray;
// `;

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
  width: 100%;
  margin-top: 5rem;
`;

const RemoveDeco = styled.a`
  color: #fff;
  text-decoration: none;
  outline: none;
`;

const ReviewDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid lightgray;
`;

export default Review;
