import styled from 'styled-components';
import Button from 'component/Button';
import Typography from 'component/Typography';
import TagComponent from 'component/TagComponent';

function PostDetail({ flex }) {
  return (
    <>
      <Summary flex={flex}>
        <Typography
          text="제목"
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
          text="내용"
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
    </>
  );
}

const Summary = styled.div.attrs(props => ({
  flex: props.flex,
}))`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
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
