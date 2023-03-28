import HomePage from 'Page/HomePage';
import LoginPage from 'Page/LoginPage';
import SignupPage from 'Page/SignupPage';
import PostPage from 'Page/PostPage';
import CreatePost from 'Page/CreatePost';
import MyPage from 'Page/MyPage';
import TradePage from 'Page/TradePage';
import ChatPage from 'Page/ChatPage';
import SearchPage from 'Page/SearchPage';
import NotFoundPage from 'Page/NotFoundPage';

export const routerList = [
  {
    id: 1,
    path: '/',
    isPrivate: false,
    element: <HomePage />,
  },
  {
    id: 2,
    path: '/login',
    isPrivate: true,
    element: <LoginPage />,
  },
  {
    id: 3,
    path: '/signup',
    isPrivate: false,
    element: <SignupPage />,
  },
  {
    id: 4,
    path: '/search',
    isPrivate: false,
    element: <SearchPage />,
  },
  {
    id: 5,
    path: '/commission/:id',
    isPrivate: false,
    element: <PostPage />,
  },
  {
    id: 6,
    path: '/trade/:id',
    isPrivate: true, //true
    element: <TradePage />,
  },
  {
    id: 7,
    path: '/create-commission',
    isPrivate: true,
    element: <CreatePost />,
  },
  {
    id: 8,
    path: '/chat/:id',
    isPrivate: true, //true
    element: <ChatPage />,
  },
  {
    id: 9,
    path: '/mypage/:id',
    isPrivate: true,
    element: <MyPage />,
  },
  {
    id: 10,
    path: '*',
    isPrivate: false,
    element: <NotFoundPage />,
  },
  {
    id: 11,
    path: '/edit-commission',
    isPrivate: false,
    element: <CreatePost />,
  },
];

// 출처: seb39_main_013
