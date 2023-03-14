// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { HeaderContainer, LogoLink } from './AppBar.styled';
import {UserMenu} from '../UserMenu/UserMenu';

const AppBar=() =>{
  // const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HeaderContainer >
    <LogoLink to="/">BR</LogoLink>
      {/* {isLoggedIn ?? <UserMenu />} */}
      <UserMenu />
    </HeaderContainer>
  );
}
export default AppBar;