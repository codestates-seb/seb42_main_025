import styled from 'styled-components';
import Button from 'component/Button';
import Typography from 'component/Typography';
import TagComponent from 'component/TagComponent';
import { currentCommission } from 'state';
import { useRecoilState } from 'recoil';

function PostDetail() {
  const [commission] = useRecoilState(currentCommission);

  return (
    <>
      {commission && (
        <Summary>
          <Typography
            text={commission.title}
            variant="h1"
            size="xxl"
            bold="bold"
            margin="xs"
            height="h_zl"
            width="w_xxxxxl"
            lineHeight="xxxl"
            line={2}
          />
          <Typography
            text={commission.content}
            variant="p"
            size="l"
            margin="xs"
            height="h_zzl"
            width="w_xxxxxl"
            lineHeight="xxl"
            line={9}
          />
          <TagContainer>
            <TagComponent text="그림" />
            <TagComponent text="그림" />
          </TagContainer>
          <Typography text="작가" size="l" bold="bold" padding="xs" flex={2} color="tea_2" />
          <Button
            text="신청하기"
            addStyle={{
              radius: 'base',
              height: 'h_s',
              width: 'full',
            }}
          />
        </Summary>
      )}
    </>
  );
}

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

const TagContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  overflow: hidden;
`;

export default PostDetail;
