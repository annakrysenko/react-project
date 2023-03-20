import LibraryForm from './LibraryForm/LibraryForm';
import MobileTable from './MobileTable/MobileTable';
import Table from './Table/Table';
import ReadTable from './ReadTable/ReadTable';
import Container from 'components/Container';
import {
  MobileAddBtn,
  StyledButton,
  StyledSection,
  TextStyled,
  TextStyledPrimary,
} from './LibraryComponent.styled';
import useLibraryComponent from './useLibraryComponent';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';
import { useSelector } from 'react-redux';
import { getFinishedReading, getCurrentlyReading } from '<your-backend>';

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

  const alreadyRead = useSelector(getFinishedReading);
  const nowReading = useSelector(getCurrentlyReading);
  
  useEffect(() => {
    console.log(goingToRead);
  }, [goingToRead]);

  return (
    <>
      <Container>
        {error && <p>{error?.data?.message}</p>}
        {!isLoading && (
          <StyledSection>
            {isMobile ? (
              <>
                {!isEmpty && (
                  <>
                    <TextStyledPrimary>Бібліотека пуста.</TextStyledPrimary>
                    <TextStyled>Додайте книжки до бібліотеки.</TextStyled>
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
                <StyledButton
                  type="primary"
                  onClick={() => {
                    navigate('/library/addBook');
                  }}
                >
                  Додати книгу
                </StyledButton>
              </>
            )}
          </StyledSection>
        )}
      </Container>
    </>
  );
};