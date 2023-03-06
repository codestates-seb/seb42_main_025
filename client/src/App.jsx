import * as React from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Reset />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
