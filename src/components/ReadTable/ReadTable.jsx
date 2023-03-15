import { StyledTable } from './ReadTable.styled';
import { data } from '../../redux/books/data';
import { RxTrash } from 'react-icons/rx';
import { MdMenuBook } from 'react-icons/md';
import theme from 'styles/theme';
import { nanoid } from 'nanoid';

const ReadTable = () => {
  const header = ['Book title', 'Author', 'Year', 'Pages'];
  const deleteBook = id => {
    console.log(id);
  };
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {header.map(item => {
              return <td key={nanoid()}>{item}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(book => {
            return (
              <tr key={book.id}>
                <td>
                  <MdMenuBook color={theme.colors.btnBackground} />
                  {book.title}
                </td>
                <td>{book.author}</td>
                <td>{book.publication}</td>
                <td>{book.pages}</td>
                <td>
                  <button type="button" onClick={() => deleteBook(book.id)}>
                    <RxTrash color={theme.colors.btnBackground} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      {/* {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )} */}
    </div>
  );
};

export default ReadTable;
