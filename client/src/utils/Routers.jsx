import Home from 'page/HomePage';
import Login from 'page/LoginPage';
import SignUpPage from 'page/SignUpPage';
import Post from 'page/PostPage';
import CreatePost from 'page/CreatePost';
import MyPage from 'page/mypage';
import TradePage from 'page/TradePage';
import ChatPage from 'page/ChatPage';
import SearchPage from 'page/SearchPage';
import NotFoundPage from 'page/NotFoundPage';

export const routerList = [
  {
    id: 1,
    path: '/',
    isPrivate: false,
    element: <Home />,
  },
  {
    id: 2,
    path: '/login',
    isPrivate: false, //true
    element: <Login />,
  },
  {
    id: 3,
    path: '/signup',
    isPrivate: false,
    element: <SignUpPage />,
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
    element: <Post />,
  },
  {
    id: 6,
    path: '/trade/:id',
    isPrivate: false, //true
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
    isPrivate: false, //true
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
];

// 출처: seb39_main_013
