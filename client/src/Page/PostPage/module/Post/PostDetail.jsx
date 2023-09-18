import styled from 'styled-components';
import Button from 'Components/Button';
import Typography from 'Components/Typography';
import TagComponent from 'Components/TagComponent';
import { useNavigate, useParams } from 'react-router-dom';

export function PostDetail({ commission }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    navigate(`/trade/${id}`);
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
            text={commission.subContent}
            variant="p"
            size="l"
            margin="xs"
            height="h_zzl"
            width="w_xxxxxl"
            lineHeight="xxl"
            line={9}
          />
          <TagComponent tags={commission.tags} />
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

// const TagContainer = styled.div`
//   display: flex;
//   flex: 2;
//   align-items: center;
//   overflow: hidden;
// `;
