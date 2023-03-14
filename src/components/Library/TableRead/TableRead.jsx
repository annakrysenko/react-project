// // import React from 'react'
// // import { TableDetails } from './TableDetails';

// // const TableRead = ({ title, status, data }) => {
// //     const { table, isModalVisible, booId, onModalClose } = TableDetails(
// //         status,
// //         data
// //      )
// //   return (
// //     <div>TableRead</div>
// //   )
// // }

// // export default TableRead;


// import React, { useState, useEffect } from 'react';

// const Books = () => {
//   const [readBooks, setReadBooks] = useState([]);
//   const [readingBooks, setReadingBooks] = useState([]);
//   const [wantToReadBooks, setWantToReadBooks] = useState([]);

//   useEffect(() => {
//     const readBooksData = localStorage.getItem('readBooks');
//     const readingBooksData = localStorage.getItem('readingBooks');
//     const wantToReadBooksData = localStorage.getItem('wantToReadBooks');

//     setReadBooks(readBooksData ? JSON.parse(readBooksData) : []);
//     setReadingBooks(readingBooksData ? JSON.parse(readingBooksData) : []);
//     setWantToReadBooks(wantToReadBooksData ? JSON.parse(wantToReadBooksData) : []);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('readBooks', JSON.stringify(readBooks));
//   }, [readBooks]);

//   useEffect(() => {
//     localStorage.setItem('readingBooks', JSON.stringify(readingBooks));
//   }, [readingBooks]);

//   useEffect(() => {
//     localStorage.setItem('wantToReadBooks', JSON.stringify(wantToReadBooks));
//   }, [wantToReadBooks]);

//   const addBook = (category, book) => {
//     switch (category) {
//       case 'read':
//         setReadBooks([...readBooks, book]);
//         break;
//       case 'reading':
//         setReadingBooks([...readingBooks, book]);
//         break;
//       case 'wantToRead':
//         setWantToReadBooks([...wantToReadBooks, book]);
//         break;
//       default:
//         break;
//     }
//   };

//   const moveBook = (sourceCategory, destinationCategory, book) => {
//     switch (sourceCategory) {
//       case 'read':
//         setReadBooks(readBooks.filter((b) => b !== book));
//         break;
//       case 'reading':
//         setReadingBooks(readingBooks.filter((b) => b !== book));
//         break;
//       case 'wantToRead':
//         setWantToReadBooks(wantToReadBooks.filter((b) => b !== book));
//         break;
//       default:
//         break;
//     }

//     addBook(destinationCategory, book);
//   };

//   const removeBook = (category, book) => {
//     switch (category) {
//       case 'read':
//         setReadBooks(readBooks.filter((b) => b !== book));
//         break;
//       case 'reading':
//         setReadingBooks(readingBooks.filter((b) => b !== book));
//         break;
//       case 'wantToRead':
//         setWantToReadBooks(wantToReadBooks.filter((b) => b !== book));
// break;
// default:
// break;
// }
// };

//         return (
//         <div className="books-container">
//         <div className="books-section">
//         <h2 className="section-title">Прочитано</h2>
//         {readBooks.map((book) => (
//         <div className="book" key={book.id}>
//         <p className="book-title">{book.title}</p>
//         <button className="move-btn" onClick={() => moveBook('read', 'reading', book)}>Читаю</button>
//         <button className="move-btn" onClick={() => moveBook('read', 'wantToRead', book)}>Хочу прочитати</button>
//         <button className="remove-btn" onClick={() => removeBook('read', book)}>Видалити</button>
//         </div>
//         ))}
//         </div>
//         <div className="books-section">
//         <h2 className="section-title">Читаю</h2>
//         {readingBooks.map((book) => (
//         <div className="book" key={book.id}>
//         <p className="book-title">{book.title}</p>
//         <button className="move-btn" onClick={() => moveBook('reading', 'read', book)}>Прочитано</button>
//         <button className="move-btn" onClick={() => moveBook('reading', 'wantToRead', book)}>Хочу прочитати</button>
//         <button className="remove-btn" onClick={() => removeBook('reading', book)}>Видалити</button>
//         </div>
//         ))}
//         </div>
//         <div className="books-section">
//         <h2 className="section-title">Хочу прочитати</h2>
//         {wantToReadBooks.map((book) => (
//         <div className="book" key={book.id}>
//         <p className="book-title">{book.title}</p>
//         <button className="move-btn" onClick={() => moveBook('wantToRead', 'read', book)}>Прочитано</button>
//         <button className="move-btn" onClick={() => moveBook('wantToRead', 'reading', book)}>Читаю</button>
//         <button className="remove-btn" onClick={() => removeBook('wantToRead', book)}>Видалити</button>
//         </div>
//         ))}
//         </div>
//         </div>
//         );
//         };

// export default Books;




import React, { useState } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

const BooksTable = ({ books, onMoveBook }) => {
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Author',
      accessor: 'author',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data: books,
    },
    useFilters,
    useSortBy
  );

  const handleDragStart = (event, book) => {
    event.dataTransfer.setData('bookId', book.id);
  };

  const handleDrop = (event, category) => {
    const bookId = event.dataTransfer.getData('bookId');
    const book = books.find((b) => b.id === bookId);
    onMoveBook(book, category);
  };

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ border: '1px solid black', padding: '8px' }}>
                {column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                <div>
                  {column.canFilter ? column.render('Filter') : null}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{ background: row.original.highlight ? '#8eff8e' : 'white' }}
              onDragStart={(event) => handleDragStart(event, row.original)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => handleDrop(event, row.original.category)}
              draggable
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BooksTable;