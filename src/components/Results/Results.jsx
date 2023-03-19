
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFinishedPages } from '../../redux/books/booksOperations';
import { getFinishedReading } from '../../redux/books/booksSelectors';

const Results = () => {
  const dispatch = useDispatch();
  const results = useSelector(getFinishedReading);
  const [date, setDate] = useState('');
  const [pages, setPages] = useState('');
  const [enteredData, setEnteredData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addFinishedPages({ date, pages }));
    setEnteredData([...enteredData, { date, pages }]);
    setDate('');
    setPages('');
  };

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <p>Date: {result.date}</p>
            <p>Pages: {result.pages}</p>
          </li>
        ))}
      </ul>
      <h3>Entered data:</h3>
      <ul>
        {enteredData.map(data => (
          <li key={`${data.date}-${data.pages}`}>
            <p>Date: {data.date}</p>
            <p>Pages: {data.pages}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" value={date} onChange={event => setDate(event.target.value)} />
        </label>
        <label>
          Pages:
          <input type="text" value={pages} onChange={event => setPages(event.target.value)} />
        </label>
        <button type="submit">Add result</button>
      </form>
    </div>
  );
};

export default Results;
