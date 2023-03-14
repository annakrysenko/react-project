import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-media';

const MobileRoute = ({ children, redirectTo }) => {
  <Media query="(max-width: 767px)">
    {matches => (matches ? { children } : <Navigate to={redirectTo} />)}
  </Media>;
};

MobileRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default MobileRoute;
