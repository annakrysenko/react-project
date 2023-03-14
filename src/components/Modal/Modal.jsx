// import { useEffect } from 'react';
// const modalRoot = document.querySelector('#modal-root');
// import { createPortal } from 'react-dom';
// const [showModal,setShowModal]= useState(false)
//  const toogleModal = () => {
//   setShowModal((state)=>{
//     return !state})

//     };
// export const Modal = ({ children, toogModal }) => {
//     const closeKEyDown = el => {
//       if (el.code === 'Escape') {
//         toogModal();
//         return;
//       }
//     };
//     useEffect(() => {
//       window.addEventListener('keydown', closeKEyDown);
//       return () => {
//         window.removeEventListener('keydown', closeKEyDown);
//       };
//     });

//     const closeModal = element => {
//       if (element.currentTarget === element.target) {
//         toogModal();
//         return;
//       }
//     };

//     return createPortal(
//       <Overlay onClick={closeModal}>
//         <ModalBox>
//        {children}
//         </ModalBox>
//       </Overlay>,
//       modalRoot
//     );
//   };
