import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { HeaderContainer, LogoLink } from './AppBar.styled';

const AppBar=() =>{
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <HeaderContainer >
    <LogoLink to="/">BR</LogoLink>
      {isLoggedIn && <UserMenu />}
    </HeaderContainer>
  );
}
export default AppBar;