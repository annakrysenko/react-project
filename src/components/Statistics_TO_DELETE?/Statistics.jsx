import { BiLike } from 'react-icons/bi';
import { useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import theme from 'styles/theme';
import {
  ModalContent,
  ModalText,
  ModalDiv,
  ModalButton,
} from 'components/Statistics_TO_DELETE?/Statistics.styled';
import { useState } from 'react';

const Statistics = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [readPages, setReadPages] = useState(0);
  const plannedPages = 100; // Planned number of pages

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const closeModal = () => {
    setIsShowModal(prevState => false);
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setReadPages(parseInt(value, 10));
  };

  // A function that is called every time the state changes `readPages`
  useEffect(() => {
    // If the number of pages read is less than planned, we display a modal
    if (readPages < plannedPages) {
      setIsShowModal(true);
    }
  }, [readPages]);

  return (
    <>
      <div>Statistics</div>
      <div>
        <label htmlFor="readPages">Number of pages read:</label>
        <input
          id="readPages"
          type="number"
          value={readPages}
          onChange={handleInputChange}
        />
      </div>
      {isShowModal && (
        <Modal toggleModal={toggleModal} closeModal={closeModal}>
          {/* <ModalContainer> */}
          <ModalContent>
            <BiLike color={theme.colors.accentColor} size={49} />
            {/* <ModalHeader> */}
            <ModalDiv>
              <ModalText>Congratulations!</ModalText>

              <ModalText>
                You read {readPages} pages out of {plannedPages}!
              </ModalText>
            </ModalDiv>
            {/* <ModalFooter> */}
            <ModalButton onClick={toggleModal}>Close</ModalButton>
            {/* </ModalFooter> */}
          </ModalContent>
          {/* </ModalContainer> */}
        </Modal>
      )}
    </>
  );
};
export default Statistics;
