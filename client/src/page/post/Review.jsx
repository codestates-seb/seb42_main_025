import styled from 'styled-components';
import ComponentBox from 'component/ComponentBox';

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
        <ReviewTitle name="리뷰">리뷰</ReviewTitle>
        <ReviewDetail>
          {/* 아직 작성된 리뷰가 없습니다 */}
          <ComponentBox mode={'REVIEW_LIST'} info={info} />
        </ReviewDetail>
        {/* {reviewData.length > 0 ? (
          <ComponentBox mode={'REVIEW_LIST'} info={info} />
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

const ReviewTitle = styled.a`
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
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid lightgray;
`;

export default Review;
