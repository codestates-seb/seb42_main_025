import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from 'component/Button';
import PostDetail from './PostDetail';
import Review from './Review';
import Commission from 'page/home/Commission';

import { Container } from 'container/Container';
import Typography from 'component/Typography';
import { getCommission } from 'apis/api/commission';
import { useParams } from 'react-router-dom';
import PostImage from './PostImage';

function Post() {
  const [commission, setCommission] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommission(params.id);
      setCommission(data);
    };
    fetch();
  }, [setCommission]);

  console.log(commission);

  return (
    <Container>
      <PostDetailBox>
        <ImageWrapper>
          <PostImage />
        </ImageWrapper>
        <PostDetailWrapper>
          <PostDetail commission={commission} />
        </PostDetailWrapper>
      </PostDetailBox>
      <DetailBox>
        <DetailReviewBox>
          <RemoveDeco href="#상세설명" name="상세설명">
            상세설명
          </RemoveDeco>
          <RemoveDeco href="#리뷰">리뷰</RemoveDeco>
        </DetailReviewBox>
        <Detail>상세설명</Detail>
      </DetailBox>
      <ReviewBox>
        <Review />
      </ReviewBox>
      <Edit>
        <EditButton>
          <Button
            text="수정"
            addStyle={{
              width: 'w_xl',
              height: 'h_m',
              radius: 'base',
              padding: '1rem',
            }}
          />
        </EditButton>
        <EditButton>
          <Button
            text="삭제"
            addStyle={{
              width: 'w_xl',
              height: 'h_m',
              radius: 'base',
              padding: '1rem',
            }}
          />
        </EditButton>
      </Edit>
      <CommissionBox>
        <Typography
          variant="h2"
          text="비슷한 커미션"
          size="xl"
          bold="bold"
          space="nowrap"
          color="tea_2"
          padding="m"
        />
        <Commission />
      </CommissionBox>
    </Container>
  );
}

const PostDetailBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1.5;
`;

const PostDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  padding: 2rem;
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
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

const Edit = styled.div`
  display: flex;
  justify-content: end;
  padding: 3rem 0;
  border-bottom: 1px solid #cecece;
`;

const EditButton = styled.div`
  margin: 0.5rem;
`;

const ReviewBox = styled.div`
  width: 100%;
  line-height: 1.6;
`;

const CommissionBox = styled.div`
  width: 100%;
  margin-top: 5rem;
  flex-wrap: wrap;
  line-height: 1.7;
`;

export default Post;
