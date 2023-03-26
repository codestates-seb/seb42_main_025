import styled from 'styled-components';
import Button from 'component/Button';
import Typography from 'component/Typography';
import TagComponent from 'component/TagComponent';
import { useNavigate, useParams } from 'react-router-dom';

function PostDetail({ commission }) {
  console.log(commission);

  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(`/tradepage/${params.id}`);
  };
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
            {commission &&
              commission.tags.map(tag => {
                return <TagComponent key={tag} text={tag} />;
              })}
          </TagContainer>
          <Typography
            text={commission.memberName}
            size="l"
            bold="bold"
            padding="xs"
            flex={2}
            color="tea_2"
          />
          <Button
            text="신청하기"
            handleClick={handleClick}
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
