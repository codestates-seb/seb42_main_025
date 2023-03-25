// App.js
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from './style/theme';
import Header from 'container/Header';
import Footer from 'container/Footer';
import { ToastContainer } from 'react-toastify';
import { routerList } from 'utils/Routers';
import PrivateRoute from 'utils/PrivateRoute';

// import UserInfo from 'component/UserInfo';

function App() {
  const isLogin = localStorage.getItem('authorization') ? true : false;

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          {routerList.map(el => {
            return (
              <Route
                key={el.id}
                path={el.path}
                element={
                  el.isPrivate ? (
                    <PrivateRoute isLogin={isLogin} component={el.element} />
                  ) : (
                    el.element
                  )
                }
              />
            );
          })}
        </Routes>
        <ToastContainer />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
