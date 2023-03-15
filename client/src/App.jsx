import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Header from 'container/Header';
import Footer from 'container/Footer';
import Home from 'page/home/Home';
import Login from 'page/Login';
import Signup from 'page/Signup';
import Post from 'page/post/Post';
import Mypage from 'page/mypage/Mypage';
import CommissionRequest from 'page/CommissionRequest';

import ComponentBoxesExamples from 'page/ComponentBoxesExamples';
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Reset />
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/component-boxes-examples" element={<ComponentBoxesExamples />} />
            <Route path="/commissionrequest" element={<CommissionRequest />} />
            <Route path="/commission" element={<Post />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
