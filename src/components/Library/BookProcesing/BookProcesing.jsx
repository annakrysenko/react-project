import LibraryForm from '../LibraryForm/LibraryForm';
import MobileTable from '../MobileBooks/MobileBooks';
import Table from './Table/Table';
import ReadTable from './ReadTable/ReadTable';
// import Container from 'components/Container';
// import {
//   MobileAddBtn,
//   StyledButton,
//   StyledSection, 
//   TextStyled,
//   TextStyledPrimary,
// } from './LibraryComponent.styled';
import useLibraryComponent from './useLibraryComponent';
import { ReactComponent as PlusIcon } from '../BooksIcon/plus.svg';
import EmtpyLibraryText from 'components/Modal/EmtpyLibraryText';

const LibraryComponent = () => {
  const {
    isMobile,
    alreadyBooks,
    nowBooks,
    planBooks,
    navigate,
    isEmpty,
    isLoading,
    error,
  } = useLibraryComponent();

  return (
    <>
      <div>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <section>
            {isMobile ? (
              <>
                {!isEmpty && (
                  <>
                    <p>Library empty</p>
                    <span>Add</span>
                  </>
                )}

                {!!alreadyBooks.length && (
                  <MobileTable
                    title={'Already read'}
                    status={false}
                    data={alreadyBooks}
                  />
                )}
                {!!nowBooks.length && (
                  <MobileTable title={'reading now'} status={true} data={nowBooks} />
                )}
                {!!planBooks.length && (
                  <MobileTable
                    title={'Going to read'}
                    status={false}
                    data={planBooks}
                  />
                )}
                <MobileAddBtn
                  type="primary"
                  onClick={() => {
                    navigate('/library/addBook');
                  }}
                >
                  <PlusIcon />
                </MobileAddBtn>
              </>
            ) : (
              <>
                <LibraryForm />
                {!!alreadyBooks.length && (
                  <ReadTable
                    title={'Already read'}
                    status={false}
                    data={alreadyBooks}
                  />
                )}
                <EmtpyLibraryText isEmptyLibrary={isEmpty} />
                {!!nowBooks.length && (
                  <Table title={'reading now'} status={true} data={nowBooks} />
                )}
                {!!planBooks.length && (
                  <Table
                    title={'Going to read'}
                    status={false}
                    data={planBooks}
                  />
                )}
              </>
            )}

            {isEmpty && (
              <button
                type="primary"
                onClick={() => {
                  navigate('/training');
                }}
              >
                Моє тренування
              </button>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default LibraryComponent;





// function LibraryFilld() {
// 	const goingToRead = useSelector(getGoingToRead);
// 	const finishedReading = useSelector(getFinishedReading);
// 	const currentlyReading = useSelector(getCurrentlyReading);
// 	const {isModal, toogleModal} = useContext(ReviewContext);
// return (
// 		<>
// 			<LibraryControlTabletSection>
// 				{finishedReading.length > 0 && (
// 					<LibraryBooklistContainer tabletSize>
// 						<LibraryBooklistTitle tabletSize>Прочитав</LibraryBooklistTitle>
// 						<LibraryBooklistTabletTable>
// 							<LibraryBooklistTabletHead>
// 								<tr>
// 									<LibraryBooklistTabletHeadCell colspan="2">
// 										Назва книги
// 									</LibraryBooklistTabletHeadCell>
// 									<LibraryBooklistTabletHeadCell authorPadding>
// 										Автор
// 									</LibraryBooklistTabletHeadCell>
// 									<LibraryBooklistTabletHeadCell right yearPadding>
// 										Рік
// 									</LibraryBooklistTabletHeadCell>
// 									<LibraryBooklistTabletHeadCell right>
// 										Стор.
// 									</LibraryBooklistTabletHeadCell>
// 									<LibraryBooklistTabletHeadCell colspan="2" ratingPadding>
// 										Рейтинг книги
// 									</LibraryBooklistTabletHeadCell>
// 								</tr>
// 							</LibraryBooklistTabletHead>
// 							<LibraryBooklistTabletBody></LibraryBooklistTabletBody>
	// {finishedReading.map(
	// 								({ title, author, publishYear, pagesTotal, _id, rating }) => {
	// 									return (
	// 										<LibraryBooklistTabletRow key={_id}>
	// 											<LibraryBooklistTabletBodyCell
	// 												colspan="2"
	// 												booknamePadding
	// 												tabletBooknameWidth
	// 											>
	// 												{title}
	// 											</LibraryBooklistTabletBodyCell>
	// 											<LibraryBooklistTabletBodyCell authorPadding>
	// 												{author}
	// 											</LibraryBooklistTabletBodyCell>
	// 											<LibraryBooklistTabletBodyCell right yearPadding>
	// 												{publishYear}
	// 											</LibraryBooklistTabletBodyCell>
	// 											<LibraryBooklistTabletBodyCell right>
	// 												{pagesTotal}
	// 											</LibraryBooklistTabletBodyCell>
	// 											<LibraryBooklistTabletBodyCell ratingPadding middle>
	// 												<Rating name="read-only" value={rating} readOnly />
	// 											</LibraryBooklistTabletBodyCell>
	// 											<LibraryBooklistTabletBodyCell buttonPadding>
	// 												<LibraryBooklistTabletButton
	// 													type="button"
	// 													onClick={() => toogleModal(_id)}
	// 												>
	// 													Резюме
	// 												</LibraryBooklistTabletButton>

	// 												{isModal === _id && (
	// 													<Modal toogleModal={toogleModal}>
	// 														<ConteinerModal>
	// 															<LibraryModal toogleModal={toogleModal} />
	// 														</ConteinerModal>
	// 													</Modal>
	// 												)}
	// 											</LibraryBooklistTabletBodyCell>
	// 										</LibraryBooklistTabletRow>
	// 									);
	// 								}
	// 							)}
	// 						</LibraryBooklistTabletBody>
	// 					</LibraryBooklistTabletTable>
	// 				</LibraryBooklistContainer>
	// 			)}