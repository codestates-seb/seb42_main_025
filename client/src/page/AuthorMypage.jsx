import styled from 'styled-components';
import { Container } from 'container/Container';
import ProgressList from 'component/Mypage/ProgressList';
import Profile from 'component/Mypage/Profile';
import PostList from 'component/Mypage/PostList';
import ChatList from 'component/Mypage/ChatList';

const S_Container = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  gap: 2rem;
  margin: 0 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  > .progressList__wrapper {
    display: grid;
    width: 100%;
    grid-column: 1 / span 8;
    grid-row: 1 / span 1;
  }

  > .profile__wrapper {
    display: grid;
    width: 100%;
    grid-column: 9 / span 4;
    grid-row: 1 / span 1;
  }
`;

function AuthorMypage() {
  const list = {
    applicaions: [
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
    ],
    progress: [
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
    ],
    complete: [
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
      {
        name: '어쩌구 저쩌구',
        title: '어쩌ㅓ쩡ㄹ마넝린ㅇ만ㅇ헝미ㅏ런일',
        content:
          '저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말저란말',
        createAt: '2022-01-01',
        tradeTitle: '판매합니다요 허허허허허헣허허허허허',
      },
    ],
  };

  const profile = {
    name: '디케이',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt id ipsa sed repudiandae delectus. Molestias praesentium dolorem at, ipsum nulla officiis autem rem totam cumque. Illo facere saepe maiores?',
  };

  return (
    <Container>
      <S_Container>
        <div className="progressList__wrapper">
          <ProgressList list={list} />
        </div>
        <div className="profile__wrapper">
          <Profile profile={profile} />
        </div>
        <div className="postList__wrapper">
          <PostList />
        </div>
        <div className="chatList__wrapper">
          <ChatList />
        </div>
      </S_Container>
    </Container>
  );
}

export default AuthorMypage;
