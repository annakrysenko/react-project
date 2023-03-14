import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { WrapperOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');

const onClose = () => {
  console.log('Modal');
}
const Modal = ({ children }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick}>{children}</div>,
    modalRoot
  );
};

export default Modal;