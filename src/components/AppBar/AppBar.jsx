import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import { HeaderContainer, LogoLink } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(getAccessToken);
  return (
    <HeaderContainer>
      <LogoLink to="/">BR</LogoLink>
      {isLoggedIn && <UserMenu />}
    </HeaderContainer>
  );
};
export default AppBar;
