import { useLocation, Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {
  const location = useLocation();

  if (location.pathname === '/signup' || location.pathname === '/login') {
    return props.isLogin ? <Navigate to={'/'} /> : props.component;
  } else {
    return props.isLogin ? props.component : <Navigate to={'/login'} replace />;
  }
}

// 출처: seb39_main_013
