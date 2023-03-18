import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPagesPerDay,
  getStats,
  addPageCountResult,
} from '../../redux/books/booksSlice';

const Result = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState('');

  const pagesPerDay = useSelector(getPagesPerDay);
  const pagesStats = useSelector(getStats);
  const today = new Date().getUTCDate();

  const total = pagesStats.reduce((acc, el) => {
    const dateNow = Number(el.time.slice(8, 10));
    let totalPages = 0;
    if (today === dateNow) {
      totalPages = acc + el.pagesCount;
    }
    return totalPages;
  }, 0);

  const handleChangePage = (evt) => {
    setPages(Number(evt.target.value));
  };

  const handleAddResults = () => {
    if (pages === '') return;
    const result = {
      time: new Date().toISOString(),
      pagesCount: pages,
    };
    dispatch(addPageCountResult(result));
    setPages('');
    // send data to the backend here
  };

  console.log(total);
  console.log(pagesStats);
  console.log(pagesStats.length !== 0 && total < pagesPerDay);

  return (
    <StatPagesContainer>
      <StatTextResolt>Results</StatTextResolt>
      <StatSubContainerTable>
        <StatCommonContainer>
          <StatSubContainer>
            <StatLabel htmlFor="data">Date</StatLabel>
            <StatInput
              id="data"
              type="text"
              defaultValue={new Date().toLocaleDateString()}
            />
          </StatSubContainer>
          <StatSubContainer>
            <StatLabel htmlFor="pages">Number of pages</StatLabel>
            <StatInput id="pages" type="text" onChange={handleChangePage} value={pages} />
          </StatSubContainer>
          <StatSubContainer>
            <StatBtnAdd onClick={handleAddResults}>Add result</StatBtnAdd>
          </StatSubContainer>
        </StatCommonContainer>
      </StatSubContainerTable>
      <StatisticsTablet />
    </StatPagesContainer>
  );
};

export default Result;