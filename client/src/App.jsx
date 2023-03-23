// App.js
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Routes, Route } from 'react-router-dom';
import theme from './style/theme';

import Header from 'container/Header';
import Footer from 'container/Footer';

import Home from 'page/home/Home';
import Login from 'page/Login';
import Signup from 'page/Signup';
import Post from 'page/post/Post';
import CreatePost from 'page/CreatePost/CreatePost';
import Mypage from 'page/mypage/Mypage';
import CommissionRequest from 'page/commissionRequest/CommissionRequest';
import ChatPage from 'page/chat/ChatPage';
import SearchPage from 'page/SearchPage';
import { ToastContainer } from 'react-toastify';

// import UserInfo from 'component/UserInfo';

function App() {
  return (
    <React.Fragment>
      <Reset />
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
          <Route path="/mypage/:id" element={<Mypage />} />
          <Route path="/chat/:id" element={<ChatPage />} />

          {/* <Route path="/userinfo" element={<UserInfo />} /> */}
        </Routes>
        <ToastContainer />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
