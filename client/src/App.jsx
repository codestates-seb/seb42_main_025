import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Post from './page/Post';
import Header from './container/Header';
import Footer from 'container/Footer';

const S_Container = styled.main`
  display: flex;
  height: max-content;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-x: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Reset />
        <ThemeProvider theme={theme}>
          <Header />
          <S_Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/commission" element={<Post />} />
            </Routes>
          </S_Container>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
