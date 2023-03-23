// App.js
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Header from 'container/Header';
import Footer from 'container/Footer';
import Home from 'page/home';
import Login from 'page/Login';
import Signup from 'page/Signup';
import Post from 'page/post';
import CreatePost from 'page/CreatePost';
import Mypage from 'page/mypage/Mypage';
import CommissionRequest from 'page/commissionRequest/CommissionRequest';
import ChatPage from 'page/chat/ChatPage';
import SearchPage from 'page/SearchPage';
import { ToastContainer } from 'react-toastify';
import { isLoggedInState } from 'state';
import { useRecoilState } from 'recoil';

// import UserInfo from 'component/UserInfo';

function App() {
  const [isLogin] = useRecoilState(isLoggedInState);
  console.log(isLogin);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/commission" element={<Post />} />
          <Route path="/commissionrequest" element={<CommissionRequest />} />
          <Route path="/createcommission" element={<CreatePost />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/mypage/:id" element={<Mypage />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
