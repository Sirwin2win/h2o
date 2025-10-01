// hooks/useAuthInit.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { setCredentials, logout } from './features/auth/authSlice';

const useAuthInit = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken && !user && !token) {
      try {
        const decoded = jwtDecode(storedToken);

        const currentTime = Date.now() / 1000; // in seconds
        if (decoded.exp && decoded.exp < currentTime) {
          // Token expired
          localStorage.removeItem('token');
          dispatch(logout());
          return;
        }

        dispatch(setCredentials({ user: decoded, token: storedToken }));
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
        dispatch(logout());
      }
    }
  }, [dispatch, user, token]);
};

export default useAuthInit;
