import Library from 'pages/Library';
import Login from 'pages/Login';
import MobileAddBook from 'pages/MobileAddBook';
import Register from 'pages/Register';
import Training from 'pages/Training';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle.jsx';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
// import { addAccessToken } from 'redux/auth/authSlice';
// import { token } from 'redux/auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutAppRegistr from './AboutAppRegist/AboutAppRegist';
import Media from 'react-media';
import { addAccessToken } from 'redux/auth/authSlice';
import { getUser, token } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import  Statistics  from 'pages/Statistic';
// import { refreshUser } from 'redux/auth/authOperation';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSid } from 'redux/auth/authSelectors';

export const App = () => {
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);
  useEffect(() => {
    setFirstRenderEnded(true);
  }, []);

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get('accessToken');
  useEffect(() => {
    if (accessToken !== null) {
      dispatch(addAccessToken(accessToken));
      token.set(accessToken);
    }
  }, [accessToken, dispatch]);

  const userToken = useSelector(getAccessToken);
  useEffect(() => {
    if (userToken !== null) {
      dispatch(getUser());
    }
  }, [userToken, dispatch]);

  // useEffect(() => {
  //   dispatch(refreshUser({ sid }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);
  return (
    firstRenderEnded && (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute restricted>
                  <Media
                    queries={{
                      small: '(max-width: 767px)',
                      large: '(min-width: 768px)',
                    }}
                  >
                    {matches => (
                      <>
                        {matches.small && <AboutAppRegistr />}
                        {matches.large && <Login />}
                      </>
                    )}
                  </Media>
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="library"
              element={
                <PrivateRoute>
                  <Library />
                </PrivateRoute>
              }
            />
            <Route
              path="library/addBook"
              element={
                <PrivateRoute>
                  <MobileAddBook />
                </PrivateRoute>
              }
            />
            <Route
              path="training"
              element={
                <PrivateRoute>
                  <Training />
                </PrivateRoute>
              }
            />
            <Route path="statistics" element={<PrivateRoute><Statistics /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </>
    )
  );
};
