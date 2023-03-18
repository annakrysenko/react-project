import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';

import Rating from '@mui/material/Rating';

import {
  getCurrentlyReading,
  // getFinishedReading,
  getGoingToRead,
} from 'redux/books/booksSelectors';
import { Modal } from 'components/Modal/Modal';
import ResumeModal from './Resume/ResumeModal';
import {
  LibraryBooklistContainer,
  LibraryBooklistTabletBody,
  LibraryBooklistTabletBodyCell,
  LibraryBooklistTabletButton,
  LibraryBooklistTabletHead,
  LibraryBooklistTabletHeadCell,
  LibraryBooklistTabletRow,
  LibraryBooklistTabletTable,
  LibraryBooklistTitle,
} from '../LibraryFilld';

function BooksTables() {
  const goingToRead = useSelector(getGoingToRead);
  // const finishedReading = useSelector(getFinishedReading);
  const currentlyReading = useSelector(getCurrentlyReading);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookId, setBookId] = useState(null);

  const toggleModal = useCallback(() => {
    console.log('first');
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const onModalClose = useCallback(() => {
    setIsModalVisible(!isModalVisible);
    setBookId(null);
  }, [isModalVisible]);

  return (
    <>
      {goingToRead.length > 0 && (
        <LibraryBooklistContainer tabletSize>
          <LibraryBooklistTitle tabletSize>Прочитав</LibraryBooklistTitle>
          <LibraryBooklistTabletTable>
            <LibraryBooklistTabletHead>
              <tr>
                <LibraryBooklistTabletHeadCell colspan="2">
                  Назва книги
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell authorPadding>
                  Автор
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right yearPadding>
                  Рік
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right>
                  Стор.
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell colspan="2" ratingPadding>
                  Рейтинг книги
                </LibraryBooklistTabletHeadCell>
              </tr>
            </LibraryBooklistTabletHead>
            <LibraryBooklistTabletBody>
              {goingToRead.map(
                ({ title, author, publishYear, pagesTotal, _id, rating }) => {
                  return (
                    <LibraryBooklistTabletRow key={_id}>
                      <LibraryBooklistTabletBodyCell
                        colspan="2"
                        booknamePadding
                        tabletBooknameWidth
                      >
                        {title}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell authorPadding>
                        {author}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right yearPadding>
                        {publishYear}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right>
                        {pagesTotal}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell ratingPadding middle>
                        <Rating name="read-only" value={rating} readOnly />
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell buttonPadding>
                        <LibraryBooklistTabletButton
                          type="primary"
                          onClick={() => {
                            setBookId(_id);
                            toggleModal();
                          }}
                        >
                          Резюме
                        </LibraryBooklistTabletButton>

                        {isModalVisible && (
                          <Modal
                            toggleModal={toggleModal}
                            closeModal={onModalClose}
                          >
                            <ResumeModal
                              toggleModal={toggleModal}
                              bookId={bookId}
                            />
                          </Modal>
                        )}
                      </LibraryBooklistTabletBodyCell>
                    </LibraryBooklistTabletRow>
                  );
                }
              )}
            </LibraryBooklistTabletBody>
          </LibraryBooklistTabletTable>
        </LibraryBooklistContainer>
      )}
      {currentlyReading.length > 0 && (
        <LibraryBooklistContainer tabletSize>
          <LibraryBooklistTitle tabletSize>Читаю</LibraryBooklistTitle>
          <LibraryBooklistTabletTable>
            <LibraryBooklistTabletHead>
              <tr>
                <LibraryBooklistTabletHeadCell colspan="2">
                  Назва книги
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell authorPadding>
                  Автор
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right yearPadding>
                  Рік
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right pagesPadding>
                  Стор.
                </LibraryBooklistTabletHeadCell>
              </tr>
            </LibraryBooklistTabletHead>
            <LibraryBooklistTabletBody>
              {currentlyReading.map(
                ({ title, author, publishYear, pagesTotal, _id }) => {
                  return (
                    <LibraryBooklistTabletRow key={_id}>
                      <LibraryBooklistTabletBodyCell
                        colspan="2"
                        booknameFullPadding
                        tabletBooknameWidth
                        orange
                      >
                        {title}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell authorPadding>
                        {author}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right yearPadding>
                        {publishYear}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right pagesPadding>
                        {pagesTotal}
                      </LibraryBooklistTabletBodyCell>
                    </LibraryBooklistTabletRow>
                  );
                }
              )}
            </LibraryBooklistTabletBody>
          </LibraryBooklistTabletTable>
        </LibraryBooklistContainer>
      )}
      {goingToRead.length > 0 && (
        <LibraryBooklistContainer tabletSize>
          <LibraryBooklistTitle tabletSize>
            Маю намір прочитати
          </LibraryBooklistTitle>
          <LibraryBooklistTabletTable>
            <LibraryBooklistTabletHead>
              <tr>
                <LibraryBooklistTabletHeadCell colspan="2">
                  Назва книги
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell authorPadding>
                  Автор
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right yearPadding>
                  Рік
                </LibraryBooklistTabletHeadCell>
                <LibraryBooklistTabletHeadCell right pagesPadding>
                  Стор.
                </LibraryBooklistTabletHeadCell>
              </tr>
            </LibraryBooklistTabletHead>
            <LibraryBooklistTabletBody>
              {goingToRead.map(
                ({ title, author, publishYear, pagesTotal, _id }) => {
                  return (
                    <LibraryBooklistTabletRow key={_id}>
                      <LibraryBooklistTabletBodyCell
                        colspan="2"
                        booknameFullPadding
                        tabletBooknameWidth
                      >
                        {title}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell authorPadding>
                        {author}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right yearPadding>
                        {publishYear}
                      </LibraryBooklistTabletBodyCell>
                      <LibraryBooklistTabletBodyCell right pagesPadding>
                        {pagesTotal}
                      </LibraryBooklistTabletBodyCell>
                    </LibraryBooklistTabletRow>
                  );
                }
              )}
            </LibraryBooklistTabletBody>
          </LibraryBooklistTabletTable>
        </LibraryBooklistContainer>
      )}
    </>
  );
}
export default BooksTables;
