import { flexRender } from '@tanstack/react-table';
// import {Modal} from 'components/Modal/Modal';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';
// import {
//   getCurrentlyReading,
//   getFinishedReading,
//   getGoingToRead,
// } from 'redux/books/booksSelectors';

import { ReactComponent as BookOrange } from '../BooksIcon/Flat.svg';
import { ReactComponent as BookGrey } from '../BooksIcon/Group.svg';
import { ReactComponent as More } from '../BooksIcon/more.svg';

// import  ResumeModal  from '../LibraryModal/ResumeModal';
import BookDetails from './BooksDetails';
// import {
//   StyledIconBox,
//   StyledTable,
//   StyledTitle,
//   Wrapper,
//   ButtonModal,
// } from './BooksTable.styled';
import { StyledIconBox, StyledTable, StyledTitle, Wrapper, ButtonModal, NavLinkMore  } from './BooksTable.styled';

export const Books = ({ status, data }) => {
  const { table } = BookDetails(status, data);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalVisible(!isModalVisible)
  //   };

  //   const closeModal = () => {
  //     setIsModalVisible(false)
  //   };

  const alreadyRead = useSelector(getFinishedReading);
  // useEffect(() => {
  //   console.log(alreadyRead);
  // }, [alreadyRead]);

  const nowReading = useSelector(getCurrentlyReading);
  // useEffect(() => {
  //   console.log(nowReading);
  // }, [nowReading]);

  const goingToRead = useSelector(getGoingToRead);
  // useEffect(() => {
  //   console.log(goingToRead);
  // }, [goingToRead]);

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
                return (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishYear}</td>
                    <td>{book.pagesTotal}</td>
                  </tr>
                );
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
                return (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishYear}</td>
                    <td>{book.pagesTotal}</td>
                  </tr>
                );
              })}
            </tbody>
          </StyledTable>
        </>
      )}

      {goingToRead?.length !== 0 && (
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
                              {table.getRowModel().rows.map(row => {
  const rowData = row.original;
  const book = goingToRead.find(book => book._id === rowData._id);
  return (
    <tr key={row.id}>
      {row.getVisibleCells().map(cell => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, {
            ...cell.getContext(),
            rowData: book ?? rowData
          })}
        </td>
      ))}
    </tr>
  );
})}
          {/* {goingToRead.map(book => {
                console.log(book);
                return (
                  <tr key={book._id}>
                    <td>
                      <StyledIconBox>
                        {status ? <BookOrange /> : <BookGrey />}
                      </StyledIconBox>
                      {book.title}
                    </td>
                    <td>{book.author}</td>
                    <td>{book.publishYear}</td>
                    <td>{book.pagesTotal}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </StyledTable>
          <ButtonModal to="/MyTraining">My training</ButtonModal>
        </>
      )}
        {alreadyRead?.length === 0 &&
        goingToRead?.length === 0 &&
        nowReading?.length === 0 && (
          <div>
            <p>Add 👇</p>
            <NavLink to="/addbook">
              <More />
            </NavLink>
          </div>
        )}
      <NavLinkMore to="/addbook">
        <More />
      </NavLinkMore>

    </Wrapper>
  );
};

//test