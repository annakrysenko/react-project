// import { useSelector } from 'react-redux';
// import { getUserName } from 'redux/auth/authSelectors';
import { ReactComponent as Home } from 'images/svg/home.svg';
import { ReactComponent as Library } from 'images/svg/library.svg';
import { ReactComponent as Line } from 'images/svg/line.svg';
import { HomeLink, HoverBtn, LibraryLink, LineStyled, LogoName, UserNameStyled } from './UserMenu.styled';


export const UserMenu = () => {
  // const userName = useSelector(getUserName);
  // const firstLetter = userName[0];
  return (
    <>
      <HomeLink to="training">
        <HoverBtn>
          <Home />
        </HoverBtn>
      </HomeLink>
      <LibraryLink to="library">
        <HoverBtn>
          <Library />
        </HoverBtn>
      </LibraryLink>
      <LineStyled>
        <Line />
      </LineStyled>
{/* 
      <UserNameStyled>{firstLetter}</UserNameStyled>
      <LogoName>{userName }</LogoName> */}
    </>
  );
};


