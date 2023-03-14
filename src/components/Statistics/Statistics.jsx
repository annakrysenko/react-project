
import { useEffect } from "react";
import { Modal } from "components/Modal/Modal";
import { useState } from "react";

const Statistics = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [readPages, setReadPages] = useState(0);
  const plannedPages = 100; // Запланована кількість сторінок

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const closeModal = () => {
    setIsShowModal(prevState => false);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReadPages(parseInt(value, 10));
  }

  // Функція, яка викликається при кожному зміні стану `readPages`
  useEffect(() => {
    // Якщо кількість прочитаних сторінок менша за заплановану, відображаємо модалку
    if (readPages < plannedPages) {
      setIsShowModal(true);
    }
  }, [readPages]);

  return (
    <>
      <div>Statistics</div>
      <div>
        <label htmlFor="readPages">Number of pages read:</label>
        <input id="readPages" type="number" value={readPages} onChange={handleInputChange} />
      </div>
      {isShowModal && (
        <Modal toggleModal={toggleModal} closeModal={closeModal}>
          <div>
            Congratulations!, you read {readPages} pages out of {plannedPages}!
          </div>
        </Modal>
      )}
    </>
  );
};
export default Statistics;