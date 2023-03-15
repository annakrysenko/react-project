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