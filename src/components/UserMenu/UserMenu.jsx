import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserName, getAccessToken } from 'redux/auth/authSelectors';
import { ReactComponent as Home } from 'images/svg/home.svg';
import { ReactComponent as Library } from 'images/svg/library.svg';
import { ReactComponent as Line } from 'images/svg/line.svg';
import {
  MenuHoverLink,
  LineStyled,
  LogoName,
  ModalText,
  ModalBtn,
  ModalBtnBox,
  ModalContainer,
  UserNameStyled,
  BtnLogOut,
  UserBox,
  LinkBox,
  LogOutBox,
  UserMenuContainer,
} from './UserMenu.styled';
import { Modal } from 'components/Modal/Modal';

export const UserMenu = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const userName = useSelector(getUserName);
  const accessToken = useSelector(getAccessToken);
  const firstLetter = userName && userName[0].toUpperCase();
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onLogOut = () => {
    dispatch(logOut(accessToken));
    toggleModal();
  };
  return (
    <>
      <UserMenuContainer>
        <LinkBox>
          <MenuHoverLink to="training">
            <Library />
          </MenuHoverLink>
          <MenuHoverLink to="library">
            <Home />
          </MenuHoverLink>
          <LineStyled>
            <Line />
          </LineStyled>
        </LinkBox>
        <UserBox>
          <LogoName>{firstLetter}</LogoName>
          <UserNameStyled>{userName}</UserNameStyled>
        </UserBox>
        <LogOutBox>
          {isShowModal && (
            <Modal toggleModal={toggleModal}>
              <ModalContainer>
                <ModalText>
                  The changes you made will be lost if you navigate away from
                  this application
                </ModalText>
                <ModalBtnBox>
                  <li>
                    <ModalBtn type="button" onClick={toggleModal}>
                      Cancel
                    </ModalBtn>
                  </li>
                  <li>
                    <ModalBtn type="button" onClick={onLogOut}>
                      Leave
                    </ModalBtn>
                  </li>
                </ModalBtnBox>
              </ModalContainer>
            </Modal>
          )}
          <BtnLogOut type="button" onClick={toggleModal}>
            Logout
          </BtnLogOut>
        </LogOutBox>
      </UserMenuContainer>
    </>
  );
};
