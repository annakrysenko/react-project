// import LibraryForm from 'components/LibaryForm/LIbaryForm';


// import ReadTable from 'components/Library/BooksTable/BooksTable';
import LibraryFilld from 'components/Library/BookProcesing/BookProcesing';
import { Books } from 'components/Library/BooksTable/Example';
import LibraryForm from 'components/LibraryForm/LIbaryForm';
import React from 'react';

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
  return (
    <>
      <LibraryForm />
      <Books />
      <LibraryFilld />
    </>
  );
};

export default Library;
// title="Already read" status={true} data={tableData}