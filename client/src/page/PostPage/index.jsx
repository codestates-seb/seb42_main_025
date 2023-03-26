import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from 'Components/Button';
import { Review } from './module/Review';
import Commission from 'Components/Commissions';
import { PostDetail, PostMain, PostImage } from './module/Post';
import { Container } from 'Container/Container';
import Typography from 'Components/Typography';
import { getCommission } from 'apis/api/commission';
import { useParams } from 'react-router-dom';

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
      {commission && (
        <>
          <PostDetailBox>
            <ImageWrapper>
              <PostImage />
            </ImageWrapper>
            <PostDetailWrapper>
              <PostDetail commission={commission} />
            </PostDetailWrapper>
          </PostDetailBox>
          <DetailBox>
            <PostMain commission={commission} />
          </DetailBox>
          <ReviewBox>
            <Review commission={commission} />
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
        </>
      )}
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
