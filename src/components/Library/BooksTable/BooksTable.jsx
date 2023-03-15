
// import React from 'react';
// import { useTable, useSortBy, useFilters } from 'react-table';

// const BooksTable = ({ books, onMoveBook }) => {
//   const columns = [
//     {
//       Header: 'Title',
//       accessor: 'title',
//     },
//     {
//       Header: 'Author',
//       accessor: 'author',
//     },
//     {
//       Header: 'Category',
//       accessor: 'category',
//     },
//   ];

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
//     {
//       columns,
//       data: books,
//     },
//     useFilters,
//     useSortBy
//   );

//   const handleDragStart = (event, book) => {
//     event.dataTransfer.setData('bookId', book.id);
//   };

//   const handleDrop = (event, category) => {
//     const bookId = event.dataTransfer.getData('bookId');
//     const book = books.find((b) => b.id === bookId);
//     onMoveBook(book, category);
//   };

//   return (
//     <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ border: '1px solid black', padding: '8px' }}>
//                 {column.render('Header')}
//                 <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
//                 <div>
//                   {column.canFilter ? column.render('Filter') : null}
//                 </div>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr
//               {...row.getRowProps()}
//               style={{ background: row.original.highlight ? '#8eff8e' : 'white' }}
//               onDragStart={(event) => handleDragStart(event, row.original)}
//               onDragOver={(event) => event.preventDefault()}
//               onDrop={(event) => handleDrop(event, row.original.category)}
//               draggable
//             >
//               {row.cells.map((cell) => (
//                 <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
//                   {cell.render('Cell')}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default BooksTable;



import { flexRender } from '@tanstack/react-table';
import {Modal} from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getBooks } from 'redux/books/bookSelectors';
import { ResumeModal } from '../Modal/ResumeModal';
// import {ModalOpenResume} from 'components/Library/Modal/ModalOpenResume';
import BookDetails from './BooksDetails';
import { StyledTable, StyledTitle, Wrapper } from './BooksTable.styled';

export const Books = ({ title, status, data }) => {
  const { table, isModalVisible, bookId, onModalClose } = BookDetails(
    status,
    data
  );

  const books = useSelector(getBooks)
  useEffect(()=> {console.log(books);},[books])

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {books.map(book => {
            console.log(book);
            return <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
               <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
  </tr>
})}

          {/* {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))} */}
        </tbody>
      </StyledTable>
      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <ResumeModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};






// import React, { useState } from 'react';
// import { useTable } from 'react-table';
// import Modal from 'components/Modal/Modal';
// import RatingModal from 'components/Library/Modal/ResumeModal';
// // import { StyledTable, StyledTitle, Wrapper } from './ReadTable.styled';

// const ReadTable = ({ title, status, data }) => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [bookId, setBookId] = useState(null);
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({
//       columns: status.map((column) => ({
//         Header: column.header,
//         accessor: column.accessor,
//         Cell: column.cell,
//       })),
//       data,
//     });

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//     setBookId(null);
//   };

//   const handleRatingClick = (bookId) => {
//     setIsModalVisible(true);
//     setBookId(bookId);
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()} key={column.id}>
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} key={row.id}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()} key={cell.id}>
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {isModalVisible && (
//         <Modal onClose={handleModalClose}>
//           <RatingModal onClose={handleModalClose} bookId={bookId} />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default ReadTable;