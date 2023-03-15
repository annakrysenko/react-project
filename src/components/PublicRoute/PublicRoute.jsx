import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAccessToken } from 'redux/auth/authSelectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getAccessToken);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/library" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
