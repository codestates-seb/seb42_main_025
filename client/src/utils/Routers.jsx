import Home from 'page/home';
import Login from 'page/Login';
import Signup from 'page/Signup';
import Post from 'page/post';
import CreatePost from 'page/CreatePost';
import Mypage from 'page/mypage/Mypage';
import CommissionRequest from 'page/commissionRequest/CommissionRequest';
import ChatPage from 'page/chat/ChatPage';
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
    isPrivate: true,
    element: <Login />,
  },
  {
    id: 3,
    path: '/signUp',
    isPrivate: true,
    element: <Signup />,
  },
  {
    id: 4,
    path: '/searchpage',
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
    path: '/commissionrequest/:id',
    isPrivate: false, //ture
    element: <CommissionRequest />,
  },
  {
    id: 7,
    path: '/createcommission',
    isPrivate: true,
    element: <CreatePost />,
  },
  {
    id: 8,
    path: '/chat/:id',
    isPrivate: true,
    element: <ChatPage />,
  },
  {
    id: 9,
    path: '/mypage/:id',
    isPrivate: true,
    element: <Mypage />,
  },
  {
    id: 10,
    path: '*',
    isPrivate: false,
    element: <NotFoundPage />,
  },
];

// 출처: seb39_main_013
