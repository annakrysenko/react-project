import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WrapperModal, WrapperOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <WrapperOverlay
      onClick={e => {
        e.target === e.currentTarget && toggleModal(e);
      }}
    >
      <WrapperModal>{children}</WrapperModal>
    </WrapperOverlay>,
    modalRoot
  );
};
