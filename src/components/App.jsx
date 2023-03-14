import Library from 'pages/Library';
import Login from 'pages/Login';
import MobileAddBook from 'pages/MobileAddBook';
import Register from 'pages/Register';
import Training from 'pages/Training';
import { Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle.jsx';
// import AboutApp from './AboutApp/AboutApp';
import Layout from './Layout/Layout';
// import LoginForm from './LoginForm/LoginForm';
import MobileRoute from './MobileRoute/MobileRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted>
                <>
                  <Login />
                </>
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
                <MobileRoute redirectTo="library">
                  <MobileAddBook />
                </MobileRoute>
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
    </>
  );
};
