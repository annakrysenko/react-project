import Books from 'components/Library/BookProcesing/Books';
import { Container } from 'components/Library/BookProcesing/Books.styled';
import LibraryForm from 'components/LibraryForm/LIbaryForm';
import LibraryInfo from 'components/Libraryinfo/Libaryinfo';
import { LibaryContainer } from 'components/Libraryinfo/Libraryinfo.styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/books/booksOperations';

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('first');
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <LibaryContainer>
          <LibraryForm />
          <LibraryInfo />
          <Books/>
        </LibaryContainer>
      </Container>
    </section>
  );
};

export default Library;
// title="Already read" status={true} data={tableData}
