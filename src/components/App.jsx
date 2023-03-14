import Library from 'pages/Library';
import Login from 'pages/Login';
import MobileAddBook from 'pages/MobileAddBook';
import Register from 'pages/Register';
import Training from 'pages/Training';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutApp from './AboutApp/AboutApp';
import Layout from './Layout/Layout';
<<<<<<< Updated upstream
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted>
                <AboutApp />
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
    </>
=======
import LibraryForm from './LibaryForm/LIbaryForm';

export const App = () => {
  return (
    <div>
      <LibraryForm/>
    </div>
    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route
    //         index
    //         element={
    //           // <PublicRoute restricted>
    //           <Route redirectTo="login">
    //             <AboutApp />
    //           </Route>
    //           // </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="register"
    //         element={
    //           // <PublicRoute restricted>
    //           <Register />
    //           // </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="login"
    //         element={
    //           // <PublicRoute restricted>
    //           <Login />
    //           // </PublicRoute>
    //         }
    //       />
    //       {/* <Route
    //         path="google-redirect"
    //         element={
    //           <PublicRoute restricted>
    //           <GoogleRedirect />
    //           </PublicRoute>
    //         }
    //       /> */}
    //       <Route
    //         path="library"
    //         element={
    //           // <PrivateRoute>
    //           <Library />
    //           // </PrivateRoute>
    //         }
    //       />
    //       <Route
    //         path="library/addBook"
    //         element={
    //           // <PrivateRoute>
    //           <Route
    //           // redirectTo="library"
    //           >
    //             <MobileAddBook />
    //           </Route>
    //           // </PrivateRoute>
    //         }
    //       />
    //       <Route
    //         path="training"
    //         element={
    //           // <PrivateRoute>
    //           <Training />
    //           // </PrivateRoute>
    //         }
    //       />
    //     </Route>
    //     <Route path="*" element={<Navigate to="/login" />} />
    //   </Routes>
    // </>
>>>>>>> Stashed changes
  );
};
