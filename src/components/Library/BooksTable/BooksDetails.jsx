import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
// import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
// import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import EllipsisText from 'react-ellipsis-text';
// import { StyledBookTitle, StyledBtn, StyledIconBox } from './ReadTable.styled';
import { useCallback, useMemo, useState } from 'react';
import { Rate } from 'antd';

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
          <div>
            <div>
              {status ? 'Orange' : 'Grey'}
            </div>
            <EllipsisText text={info.getValue()} length={50} />
          </div>
        ),
      }),
      columnHelper.accessor('author', {
        header: 'Author',
      }),
      columnHelper.accessor('publication', {
        header: 'Year',
      }),
      columnHelper.accessor('pages', {
        header: 'Pages.',
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
          <button
            type="primary"
            onClick={() => {
              setBookId(info.getValue());
              toggleModal();
            }}
          >
            Resume
          </button>
        ),
      }),
    ],
    [columnHelper, status, toggleModal]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table, isModalVisible, bookId, onModalClose };
};

export default BookDetails;
