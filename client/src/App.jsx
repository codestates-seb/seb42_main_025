import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Home from './page/Home';
import Footer from 'container/Footer';
import Login from 'page/Login';
import Signup from 'page/Signup';
import ComponentBoxesExamples from 'page/ComponentBoxesExamples';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Reset />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/component-boxes-examples" element={<ComponentBoxesExamples />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
