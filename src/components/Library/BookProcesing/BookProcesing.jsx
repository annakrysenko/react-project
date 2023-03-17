// import LibraryForm from '../LibraryForm/LibraryForm';
// import MobileTable from '../MobileBooks/MobileBooks';
// import Table from './Table/Table';
// import ReadTable from './ReadTable/ReadTable';
// // import Container from 'components/Container';
// // import {
// //   MobileAddBtn,
// //   StyledButton,
// //   StyledSection,
// //   TextStyled,
// //   TextStyledPrimary,
// // } from './LibraryComponent.styled';
// import useLibraryComponent from './useLibraryComponent';
// import { ReactComponent as PlusIcon } from '../BooksIcon/plus.svg';
// import EmtpyLibraryText from 'components/Modal/EmtpyLibraryText';

// const LibraryComponent = () => {
//   const {
//     isMobile,
//     alreadyBooks,
//     nowBooks,
//     planBooks,
//     navigate,
//     isEmpty,
//     isLoading,
//     error,
//   } = useLibraryComponent();

//   return (
//     <>
//       <div>
//         {error && <p>{error?.data?.message}</p>}
//         {!isLoading && (
//           <section>
//             {isMobile ? (
//               <>
//                 {!isEmpty && (
//                   <>
//                     <p>Library empty</p>
//                     <span>Add</span>
//                   </>
//                 )}

//                 {!!alreadyBooks.length && (
//                   <MobileTable
//                     title={'Already read'}
//                     status={false}
//                     data={alreadyBooks}
//                   />
//                 )}
//                 {!!nowBooks.length && (
//                   <MobileTable title={'reading now'} status={true} data={nowBooks} />
//                 )}
//                 {!!planBooks.length && (
//                   <MobileTable
//                     title={'Going to read'}
//                     status={false}
//                     data={planBooks}
//                   />
//                 )}
//                 <MobileAddBtn
//                   type="primary"
//                   onClick={() => {
//                     navigate('/library/addBook');
//                   }}
//                 >
//                   <PlusIcon />
//                 </MobileAddBtn>
//               </>
//             ) : (
//               <>
//                 <LibraryForm />
//                 {!!alreadyBooks.length && (
//                   <ReadTable
//                     title={'Already read'}
//                     status={false}
//                     data={alreadyBooks}
//                   />
//                 )}
//                 <EmtpyLibraryText isEmptyLibrary={isEmpty} />
//                 {!!nowBooks.length && (
//                   <Table title={'reading now'} status={true} data={nowBooks} />
//                 )}
//                 {!!planBooks.length && (
//                   <Table
//                     title={'Going to read'}
//                     status={false}
//                     data={planBooks}
//                   />
//                 )}
//               </>
//             )}

//             {isEmpty && (
//               <button
//                 type="primary"
//                 onClick={() => {
//                   navigate('/training');
//                 }}
//               >
//                 Моє тренування
//               </button>
//             )}
//           </section>
//         )}
//       </div>
//     </>
//   );
// };

// export default LibraryComponent;

import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  LibraryBooklistContainer,
  LibraryBooklistTitle,
  // LibraryBooklistSubContainer,
  // LibraryBooklistTable,
  // LibraryBooklistRow,
  // LibraryBooklistCell,
  // LibraryBooklistNameCell,
  // LibraryBooklistButton,
  // LibraryControlMobileSection,
  LibraryControlTabletSection,
  LibraryBooklistTabletButton,
  LibraryBooklistTabletTable,
  LibraryBooklistTabletHead,
  LibraryBooklistTabletHeadCell,
  LibraryBooklistTabletBody,
  LibraryBooklistTabletBodyCell,
  LibraryBooklistTabletRow,
} from '../LibraryFilld';
// import {
// 	getGoingToRead,
// 	getFinishedReading,
// 	getCurrentlyReading,
// } from '../../../redux/library/librarySelector';
import LibraryModal from '../LibraryModal/LibraryModal';

// import {Modal} from 'components/Modal/Modal';
// import ConteinerModal from '../LibraryFilld/ConteinerModal.styled';

import Rating from '@mui/material/Rating';

// import { ReviewContext } from '../ReviewContext/ReviewContext';
import {
  getCurrentlyReading,
  getFinishedReading,
  getGoingToRead,
} from 'redux/books/booksSelectors';

function LibraryFilld() {
  const goingToRead = useSelector(getGoingToRead);
  const finishedReading = useSelector(getFinishedReading);
  const currentlyReading = useSelector(getCurrentlyReading);
  // const {isModal, toogleModal} = useContext(ReviewContext);
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = id => {
    setIsModal(id);
  };

  return (
    <>
      <LibraryControlTabletSection>
        {finishedReading.length > 0 && (
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
                {finishedReading.map(
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
                            type="button"
                            // onClick={() => toogleModal(_id)}
                            onClick={() => handleToggleModal(_id)}
                          >
                            Резюме
                          </LibraryBooklistTabletButton>

                          {isModal === _id && (
                            // <Modal toogleModal={toogleModal}>
                            // 	<ConteinerModal>
                            // 		<LibraryModal toogleModal={toogleModal} />
                            // 	</ConteinerModal>
                            // </Modal>
                            <LibraryModal
                              isModal={isModal}
                              handleToggleModal={handleToggleModal}
                            />
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
      </LibraryControlTabletSection>
    </>
  );
}
export default LibraryFilld;

// {/* <LibraryControlMobileSection>
// 				{finishedReading.length > 0 && (
// 					<LibraryBooklistContainer>
// 						<LibraryBooklistTitle>Прочитано</LibraryBooklistTitle>
// 						{finishedReading.map(
// 							({ title, author, publishYear, pagesTotal, _id, rating }) => {
// 								return (
// 									<LibraryBooklistSubContainer key={_id}>
// 										<LibraryBooklistTable>
// 											<tbody>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistNameCell colspan="2">
// 														{title}
// 													</LibraryBooklistNameCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
// 													<LibraryBooklistCell>{author}</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{publishYear}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{pagesTotal}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell middle>
// 														Рейтинг:
// 													</LibraryBooklistCell>
// 													<LibraryBooklistCell middle>
// 														<Rating name="read-only" value={rating} readOnly />
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 											</tbody>
// 										</LibraryBooklistTable>
// 										<LibraryBooklistButton
// 											type="button"
// 											onClick={() => toogleModal(_id)}
// 										>
// 											Резюме
// 										</LibraryBooklistButton>

// 										{isModal === _id && (
// 											<Modal toogleModal={toogleModal}>
// 												<ConteinerModal>
// 													<LibraryModal toogleModal={toogleModal} />
// 												</ConteinerModal>
// 											</Modal>
// 										)}
// 									</LibraryBooklistSubContainer>
// 								);
// 							}
// 						)}
// 					</LibraryBooklistContainer>
// 				)}
// 				{currentlyReading.length > 0 && (
// 					<LibraryBooklistContainer>
// 						<LibraryBooklistTitle>Читаю</LibraryBooklistTitle>
// 						{currentlyReading.map(
// 							({ title, author, publishYear, pagesTotal, _id }) => {
// 								return (
// 									<LibraryBooklistSubContainer key={_id}>
// 										<LibraryBooklistTable>
// 											<tbody>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistNameCell orange colspan="2">
// 														{title}
// 													</LibraryBooklistNameCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
// 													<LibraryBooklistCell>{author}</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{publishYear}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{pagesTotal}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 											</tbody>
// 										</LibraryBooklistTable>
// 									</LibraryBooklistSubContainer>
// 								);
// 							}
// 						)}
// 					</LibraryBooklistContainer>
// 				)}
// 				{goingToRead.length > 0 && (
// 					<LibraryBooklistContainer>
// 						<LibraryBooklistTitle>Маю намір прочитати</LibraryBooklistTitle>
// 						{goingToRead.map(
// 							({ title, author, publishYear, pagesTotal, _id }) => {
// 								return (
// 									<LibraryBooklistSubContainer key={_id}>
// 										<LibraryBooklistTable>
// 											<tbody>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistNameCell colspan="2">
// 														{title}
// 													</LibraryBooklistNameCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
// 													<LibraryBooklistCell>{author}</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{publishYear}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 												<LibraryBooklistRow>
// 													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
// 													<LibraryBooklistCell>
// 														{pagesTotal}
// 													</LibraryBooklistCell>
// 												</LibraryBooklistRow>
// 											</tbody>
// 										</LibraryBooklistTable>
// 									</LibraryBooklistSubContainer>
// 								);
// 							}
// 						)}
// 					</LibraryBooklistContainer>
// 				)}
// 			</LibraryControlMobileSection> * /}
// 		</>
// 	);
