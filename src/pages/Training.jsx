import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';


import Statistics from 'components/Statistics/Statistics';


import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';

// import { useState, useEffect, useCallback } from 'react';

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
      <TimerMainContainer>
        <TimerYear />
        <TimerGoal />
      </TimerMainContainer>
      <Statistics/>
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
