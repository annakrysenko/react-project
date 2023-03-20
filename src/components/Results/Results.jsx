import { useDispatch } from 'react-redux';

import StatisticsTablet from './StatisticsTablet';
import { useState } from 'react';
// import { Modal } from 'components/Modal/Modal';
import // getCurrentlyReading,
// getPagesPerDay,
// getStats,
'redux/books/booksSelectors';
import StatPagesContainer from './ResultsStyles/StatPagesContainer.styled';
import StatTextResolt from './ResultsStyles/StatTextResolt.styled';
import StatSubContainerTable from './ResultsStyles/StatSubContainerTable.styled';
import StatCommonContainer from './ResultsStyles/StatCommonContainer.styled';
import StatSubContainer from './ResultsStyles/StatSubContainer.styled';
import StatLabel from './ResultsStyles/StatLabel.styled';
import StatInput from './ResultsStyles/StatInput.styled';
import StatisticsButton from './ResultsStyles/StatisticsButton.styled';
import // ButtonConteinerCentred,
// ButtonConteinerStats,
// ButtonLogout,
// ButtonTreining,
// ConteinerStats,
// IconConteiner,
// ModalLogoutText,
'./ResultsStyles/Modal.styled';
// import { ReactComponent as Finger } from '../../images/finger.svg';
import { addFinishedPages } from 'redux/books/booksOperations';

const Results = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState('');
  // const [isModal, setIsModal] = useState(true);
  // const [isModal2, setIsModal2] = useState(true);

  // const currentlyReading = useSelector(getCurrentlyReading);
  // const pagesStats = useSelector(getStats);
  // const today = new Date().getUTCDate();

  // const toogleModal = () => {
  //   setIsModal(!isModal);
  // };

  // const toogleModal2 = () => {
  //   setIsModal2(!isModal2);
  // };
  // const [isShowModal, setIsShowModal] = useState(false);

  // const toggleModal = () => {
  //   setIsShowModal(prevState => !prevState);
  // };

  // const closeModal = () => {
  //   setIsShowModal(prevState => false);
  // };

  // const total = pagesStats.reduce((acc, el) => {
  //   const dateNow = Number(el.time.slice(8, 10));
  //   let totalPages = 0;
  //   if (today === dateNow) {
  //     totalPages = acc + el.pagesCount;
  //   }
  //   return totalPages;
  // }, 0);

  const handleChangePage = evt => {
    setPages(Number(evt.target.value));
  };

  const handleAddResults = pages => {
    dispatch(addFinishedPages(pages));
    setPages('');
  };
  // console.log(total);
  // console.log(pagesStats);
  // console.log(pagesStats.length !== 0 && total < pagesPerDay);

  return (
    <StatPagesContainer>
      <StatTextResolt>Results</StatTextResolt>
      <StatSubContainerTable>
        <StatCommonContainer>
          <StatSubContainer>
            <StatLabel htmlFor="data">Date</StatLabel>
            <StatInput
              id="data"
              type="text"
              defaultValue={new Date().toLocaleDateString()}
            />
          </StatSubContainer>
          <StatSubContainer>
            <StatLabel htmlFor="pages">Per pages </StatLabel>
            <StatInput
              id="pages"
              type="text"
              onChange={handleChangePage}
              value={pages}
            />
          </StatSubContainer>
        </StatCommonContainer>
        <StatisticsButton
          type="button"
          onClick={() => {
            handleAddResults({ pages });
          }}
        >
          Add results
        </StatisticsButton>
      </StatSubContainerTable>
      <StatisticsTablet />

      {/* {isShowModal && total < pagesPerDay &&
        currentlyReading.some(
          book => book.pagesFinished === book.pagesTotal
        ) && (
          <Modal closeModal={closeModal} toogleModal={toggleModal}>
            <Modal>
              <IconConteiner>
                <Finger />
              </IconConteiner>
              <ModalLogoutText>Вітаю! Ще одна книга прочитана.</ModalLogoutText>
              <ButtonConteinerCentred>
                <ButtonLogout type="button" onClick={toggleModal}>
                  готово
                </ButtonLogout>
              </ButtonConteinerCentred>
            </Modal>
          </Modal>
        )} */}

      {/* {isModal && pagesStats.length !== 0 && total < pagesPerDay && (
        <Modal toogleModal={toggleModal} closeModal={closeModal}>
          <ConteinerStats>
            <Finger />
            <ModalLogoutText>
              Ти молодчина, але потрібно швидше! Наступного разу тобі все
              вдасться &#41;
            </ModalLogoutText>
            <ButtonConteinerStats>
              <ButtonTreining type="button" onClick={toggleModal}>
                Новє тренування
              </ButtonTreining>
              <ButtonTreining type="button" onClick={toggleModal}>
                Назад
              </ButtonTreining>
            </ButtonConteinerStats>
          </ConteinerStats>
        </Modal>
      )} */}
      {/* <button type="button" onClick={toogleModal}>
				модалка "ти молодець"
			</button> */}
    </StatPagesContainer>
  );
};

export default Results;
