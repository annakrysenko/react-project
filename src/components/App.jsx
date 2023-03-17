import Library from 'pages/Library';
import Login from 'pages/Login';
import MobileAddBook from 'pages/MobileAddBook';
import Register from 'pages/Register';
import Training from 'pages/Training';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
// import { fetchCurrentUser } from 'redux/auth/authOperation';
// import { getfetchCurrentUser } from 'redux/auth/authSelectors';
import GlobalStyle from 'styles/GlobalStyle.jsx';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { addAccessToken } from 'redux/auth/authSlice';
import { fetchCurrentUser, token } from 'redux/auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getfetchCurrentUser } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getfetchCurrentUser);
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentUser());
    setFirstRenderEnded(true);
    console.log('isFetching', isFetching);
  }, [dispatch, isFetching]);

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token');
  console.log('accessToken params', accessToken);

  useEffect(() => {
    if (accessToken !== null) {
      dispatch(addAccessToken(accessToken));
      token.set(accessToken);
    }
  }, [accessToken, dispatch]);

  return (
    !isFetching &&
    firstRenderEnded && (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute restricted>
                  <Login />
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
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </>
    // )
  );
};
