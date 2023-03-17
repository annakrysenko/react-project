import { flexRender } from '@tanstack/react-table';
// import {Modal} from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';

import { ReactComponent as BookOrange } from '../BooksIcon/Flat.svg';
import { ReactComponent as BookGrey } from '../BooksIcon/Group.svg';

// import  ResumeModal  from '../LibraryModal/ResumeModal';
import BookDetails from './BooksDetails';
import { StyledBtn, StyledIconBox, StyledTable, StyledTitle, Wrapper } from './BooksTable.styled';

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


  const alreadyRead = useSelector(getFinishedReading)
  useEffect(() => { console.log(alreadyRead) }, [alreadyRead ])
  
  const nowReading = useSelector(getCurrentlyReading)
  useEffect(() => { console.log(nowReading)}, [nowReading])
  
  const goingToRead = useSelector(getGoingToRead)
  useEffect(() => { console.log(goingToRead) }, [goingToRead])
  

  return (
      <Wrapper>
          {alreadyRead?.length !== 0 && (
              <>
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
          {alreadyRead.map(book => {
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
              </>
          )}

          {nowReading?.length !== 0 && (
              <>
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
          {nowReading.map(book => {
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
              </>
          )}
      

          { goingToRead?.length !== 0 &&(
              <>
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
          {goingToRead.map(book => {
            console.log(book);
            return <tr key={book._id}>
              <td><StyledIconBox>
              {status ? <BookOrange /> : <BookGrey />}
                </StyledIconBox>
                    {book.title}</td>
              <td>{book.author}</td>
               <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
  </tr>
})}
        </tbody>
                  </StyledTable>
                     <StyledBtn
            to="/MyTraining"
          >
            My training
          </StyledBtn>
              </>
          )}
    </Wrapper>
  );
};