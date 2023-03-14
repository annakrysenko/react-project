import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
// import myGoal from 'components/MyGoal/MyGoal';
// import Training from 'components/MyTraining';

const Training = () => {
  //  ====== ПРИКЛАД ВИКОРИСТАННЯ МОДАЛКИ =====
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const closeModal = () => {
    setIsShowModal(prevState => false);
  };
  // =============================================
  return (
    <>
      <div>
        <TimerYear />
        <TimerGoal />
      </div>

      {/* ====== ПРИКЛАД ВИКОРИСТАННЯ МОДАЛКИ =====*/}
      <button onClick={toggleModal}>Open modal</button>
      {isShowModal && (
        <Modal toggleModal={toggleModal} closeModal={closeModal}>
          <p>Hello modal</p>
        </Modal>
        // ===========================================
      )}
    </>
  );
};

export default Training;
