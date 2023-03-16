import Library from 'pages/Library';
import Login from 'pages/Login';
import MobileAddBook from 'pages/MobileAddBook';
import Register from 'pages/Register';
import Training from 'pages/Training';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
// import { fetchCurrentUser } from 'redux/auth/authOperation';
// import { getfetchCurrentUser } from 'redux/auth/authSelectors';
import GlobalStyle from 'styles/GlobalStyle.jsx';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { addAccessToken } from 'redux/auth/authSlice';
import { token } from 'redux/auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  // const isFetching = useSelector(getfetchCurrentUser);
  // const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  //   setFirstRenderEnded(true);
  // }, [dispatch]);

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  useEffect(() => {
    if (accessToken !== null) {
      dispatch(addAccessToken(accessToken));
      token.set(accessToken);
    }
  }, [accessToken, dispatch]);

  return (
    // !isFetching &&
    // firstRenderEnded && (
    <>
      {/* <ToastContainer position="top-right" autoClose={2000} theme="colored" /> */}
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
  );
  // );
};
