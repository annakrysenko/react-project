import LibraryForm from './LibraryForm/LibraryForm';
import MobileTable from './MobileTable/MobileTable';
import Table from './Table/Table';
import ReadTable from './ReadTable/ReadTable';
import Container from 'components/Container';
// import {
//   MobileAddBtn,
//   StyledButton,
//   StyledSection,
//   TextStyled,
//   TextStyledPrimary,
// } from './LibraryComponent.styled';
import useLibraryComponent from './useLibraryComponent';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';

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
      <Container>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <section>
            {isMobile ? (
              <>
                {!isEmpty && (
                  <>
                    <p>Бібліотека пуста.</p>
                    <span>Додайте книжки до бібліотеки.</span>
                  </>
                )}

                {!!alreadyBooks.length && (
                  <MobileTable
                    title={'Прочитано'}
                    status={false}
                    data={alreadyBooks}
                  />
                )}
                {!!nowBooks.length && (
                  <MobileTable title={'Читаю'} status={true} data={nowBooks} />
                )}
                {!!planBooks.length && (
                  <MobileTable
                    title={'Маю намір прочитати'}
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
                    title={'Прочитано'}
                    status={false}
                    data={alreadyBooks}
                  />
                )}
                <EmtpyLibraryText isEmptyLibrary={isEmpty} />
                {!!nowBooks.length && (
                  <Table title={'Читаю'} status={true} data={nowBooks} />
                )}
                {!!planBooks.length && (
                  <Table
                    title={'Маю намір прочитати'}
                    status={false}
                    data={planBooks}
                  />
                )}
              </>
            )}

            {isEmpty && (
              <StyledButton
                type="primary"
                onClick={() => {
                  navigate('/training');
                }}
              >
                Моє тренування
              </StyledButton>
            )}
          </section>
        )}
      </Container>
    </>
  );
};

export default LibraryComponent;