import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookOrange } from '../BooksIcon/Flat.svg';
import { ReactComponent as BookGrey } from '../BooksIcon/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledBtn, StyledIconBox } from './BooksTable.styled';
import { useCallback, useMemo, useState } from 'react';
import { Rate } from 'antd';
import { Modal } from 'components/Modal/Modal';
import ResumeModal from '../BookProcesing/Resume/ResumeModal';

const BookDetails = (status, data) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookId, setBookId] = useState(null);
  const toggleModal = useCallback(
    () => setIsModalVisible(!isModalVisible),
    [isModalVisible]
  );

  const onModalClose = useCallback(() => {
    setIsModalVisible(!isModalVisible);
    setBookId(null);
  }, [isModalVisible]);

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Book title',
        cell: info => (
          <StyledBookTitle>
            <StyledIconBox>
              {status ? <BookOrange /> : <BookGrey />}
              {/* {status ?  <BookGrey /> : <BookOrange />} */}
              {/* {status ? <BookOrange /> : <BookGrey />} */}
              {/* {status ? <BookGrey /> : <BookOrange />} */}
            </StyledIconBox>
            <EllipsisText text={info.getValue()} length={50} />
          </StyledBookTitle>
        ),
      }),
      columnHelper.accessor('author', {
        header: 'Author',
      }),
      columnHelper.accessor('publication', {
        header: 'Year',
      }),
      columnHelper.accessor('pages', {
        header: 'Pages',
      }),
      columnHelper.accessor('rating', {
        header: 'Rating',
        cell: info => (
          <Rate
            style={{ width: '120px', fontSize: '17px' }}
            disabled
            value={info.getValue()}
          />
        ),
      }),
      columnHelper.accessor('_id', {
        header: '',
        cell: info => (
          <>
            {' '}
            {isModalVisible && (
              <Modal toggleModal={toggleModal} closeModal={onModalClose}>
                <ResumeModal toggleModal={toggleModal} bookId={bookId} />
              </Modal>
            )}
            <StyledBtn
              type="primary"
              onClick={() => {
                setBookId(info.getValue());
                toggleModal();
              }}
            >
              Resume
            </StyledBtn>
          </>
        ),
      }),
    ],
    [columnHelper, status, toggleModal, bookId, isModalVisible, onModalClose]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table, isModalVisible, bookId, onModalClose };
};

export default BookDetails;

//test
