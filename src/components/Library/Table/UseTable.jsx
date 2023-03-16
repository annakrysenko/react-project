import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookOrange } from '../BooksIcon/Flat.svg';
import { ReactComponent as BookGrey } from '../BooksIcon/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledIconBox } from './Table.styled';
import { useMemo } from 'react';

const useTable = (status, data) => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Book title',
        cell: info => (
          <StyledBookTitle>
            <StyledIconBox>
              {status ? <BookOrange /> : <BookGrey />}
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
    ],
    [columnHelper, status]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useTable;