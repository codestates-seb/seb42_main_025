import styled from 'styled-components';

function PostMain({ commission }) {
  return (
    <>
      <DetailReviewBox>
        <RemoveDeco href="#상세설명" name="상세설명">
          상세설명
        </RemoveDeco>
        <RemoveDeco href="#리뷰">리뷰</RemoveDeco>
      </DetailReviewBox>
      <Detail>{commission.content}</Detail>
    </>
  );
}

const DetailReviewBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ddba9d;
  border-radius: 5px;
  white-space: nowrap;
  font-weight: bold;
  color: #fff;
  height: 3rem;
  margin-top: 5rem;
`;

const RemoveDeco = styled.a`
  color: #fff;
  text-decoration: none;
  outline: none;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0px;
  border-bottom: 1px solid gray;
`;

export default PostMain;
