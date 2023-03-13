import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
