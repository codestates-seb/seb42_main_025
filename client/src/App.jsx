import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Home from './page/Home';
import Signup from './page/Signup';
import Header from './container/Header';

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
            </Routes>
          </S_Container>
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
