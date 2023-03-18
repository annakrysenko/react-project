//  import LibraryFilld from 'components/Library/BookProcesing/BookProcesing';
import BooksTables from 'components/Library/BookProcesing/BooksTables';
import LibraryForm from 'components/LibraryForm/LIbaryForm';
import LibraryInfo from 'components/Libraryinfo/Libaryinfo';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/books/booksOperations';

// const tableData = [
//   {
//     title: 'Book1',
//     author: 'Mike',
//     publication: 2022,
//     pages: 234,
//     rating: 4,
//     id: 1,
//   },
//   {
//     title: 'Book2',
//     author: 'Mike',
//     publication: 2020,
//     pages: 321,
//     rating: 3,
//     id: 2,
//   },
//   {
//     title: 'Book3',
//     author: 'Mike',
//     publication: 2018,
//     pages: 432,
//     rating: 5,
//     id: 3,
//   },
//   {
//     title: 'Book1',
//     author: 'Mike',
//     publication: 2022,
//     pages: 234,
//     rating: 4,
//     id: 1,
//   },
//   {
//     title: 'Book2',
//     author: 'Mike',
//     publication: 2020,
//     pages: 321,
//     rating: 3,
//     id: 2,
//   },
//   {
//     title: 'Book3',
//     author: 'Mike',
//     publication: 2018,
//     pages: 432,
//     rating: 5,
//     id: 3,
//   },
// ];

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('first');
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <LibraryForm />
      <LibraryInfo />

      {/* <Books /> */}
      <BooksTables />
       {/* <LibraryFilld/> */}
    </>
  );
};

export default Library;
// title="Already read" status={true} data={tableData}
