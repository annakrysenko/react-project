import { flexRender } from '@tanstack/react-table';
// import {Modal} from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';


// import  ResumeModal  from '../LibraryModal/ResumeModal';
import BookDetails from './BooksDetails';
import { StyledTable, StyledTitle, Wrapper } from './BooksTable.styled';

export const Books = ({ title, status, data }) => {
  const { table} = BookDetails(
    status,
    data
  );
// const [isModalVisible, setIsModalVisible] = useState(false);

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible)
//   };

//   const closeModal = () => {
//     setIsModalVisible(false)
//   };


  const booksReaded = useSelector(getFinishedReading)
  useEffect(() => { console.log(booksReaded); }, [booksReaded ])
  
  const booksReading = useSelector(getCurrentlyReading)
  useEffect(() => { console.log(booksReading); }, [booksReading])
  
  const booksGoing = useSelector(getGoingToRead)
  useEffect(() => { console.log(booksGoing); }, [booksGoing])
  

  return (
    <Wrapper>
      <StyledTitle>Already read</StyledTitle>
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
          {booksReaded.map(book => {
            console.log(book);
            return <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
               <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
  </tr>
})}
        </tbody>
      </StyledTable>
      {/* {isModalVisible && (
        <Modal onClose={onModalClose}>
          <ResumeModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )} */}

        <StyledTitle>Reading now</StyledTitle>
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
          {booksReading.map(book => {
            console.log(book);
            return <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
               <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
  </tr>
})}
        </tbody>
      </StyledTable>
      {/* {isModalVisible && (
        <Modal onClose={onModalClose}>
          <ResumeModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )} */}

       <StyledTitle>Going to read </StyledTitle>
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
          {/* {booksGoing.map(book => {
            console.log(book);
            return <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
               <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
  </tr>
})} */}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};









// import { flexRender } from '@tanstack/react-table';
// import {Modal} from 'components/Modal/Modal';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';
// import ResumeModal from '../LibraryModal/ResumeModal';
// import BookDetails from './BooksDetails';
// import { StyledBtn, StyledTable, StyledTitle, Wrapper } from './BooksTable.styled';

// export const Books = ({ title, status, data }) => {
//   const { table } = BookDetails(status, data);

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const toggleModalVisibility = () => {
//     console.log('Modal visibility toggled');
//     setIsModalVisible(!isModalVisible);
//   };

//   const booksReaded = useSelector(getFinishedReading)
//   useEffect(() => { console.log(booksReaded); }, [booksReaded ])
  
//   const booksReading = useSelector(getCurrentlyReading)
//   useEffect(() => { console.log(booksReading); }, [booksReading])
  
//   const booksGoing = useSelector(getGoingToRead)
//   useEffect(() => { console.log(booksGoing); }, [booksGoing])

//   return (
//     <Wrapper>
//       <StyledTitle>{title}</StyledTitle>
//       <StyledTable>
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map(cell => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//               <td>
//                 {/* <StyledBtn onClick={() => setIsModalVisible(true)}>Resume</StyledBtn> */}
//                 <StyledBtn onClick={toggleModalVisibility}>Resume</StyledBtn>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </StyledTable>
//       <Modal isOpen={isModalVisible} onClose={toggleModalVisibility}>
//       {/* <Modal isOpen={isModalVisible} onClose={toggleModalVisibility} isDismissable={false}> */}
//         <ResumeModal />
//       </Modal>
//     </Wrapper>
//   );
// };




// import { flexRender } from '@tanstack/react-table';
// import {Modal} from 'components/Modal/Modal';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';


// import  ResumeModal  from '../LibraryModal/ResumeModal';
// import BookDetails from './BooksDetails';
// import { StyledTable, StyledTitle, Wrapper } from './BooksTable.styled';

// export const Books = ({ title, status, data }) => {
//   const { table, isModalVisible, bookId, onModalClose } = BookDetails(
//     status,
//     data
//   );

//   const booksReaded = useSelector(getFinishedReading)
//   useEffect(() => { console.log(booksReaded); }, [booksReaded])
  
//   const booksReading = useSelector(getCurrentlyReading)
//   useEffect(() => { console.log(booksReading); }, [booksReading])
  
//   const booksGoing = useSelector(getGoingToRead)
//   useEffect(() => { console.log(booksGoing); }, [booksGoing])
  
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <Wrapper>
//       <StyledTitle>{title}</StyledTitle>
//       <StyledTable>
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                       header.column.columnDef.header,
//                       header.getContext()
//                     )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map(cell => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </StyledTable>
//       {isModalVisible && (
//         <Modal toggleModal={toggleModal} closeModal={closeModal}>
//           <ResumeModal onClose={onModalClose} bookId={bookId} />
//         </Modal>
//       )}
//     </Wrapper>
//   );
// }
