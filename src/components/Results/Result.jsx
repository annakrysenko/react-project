import { Result } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getFinishedReading,
  getEndDate,
  getStartDate,
  getPagesPerDay,
} from "./booksSelectors";
import { addReadingResult } from "./booksSlice";

const ResultsSection = () => {
  const dispatch = useDispatch();

  // local component state to store user input
  const [formData, setFormData] = useState({
    date: "",
    pages: "",
  });

  // handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch an action to add the reading result to the store
    dispatch(addReadingResult(formData));
    
    // clear the input fields
    setFormData({ date: "", pages: "" });
  };

  // get data from the store using selectors
  const finishedReading = useSelector(getFinishedReading);
  const endDate = useSelector(getEndDate);
  const startDate = useSelector(getStartDate);
  const pagesPerDay = useSelector(getPagesPerDay);

  return (
    <div>
      <h2>Results</h2>

      <p>Finished reading: {finishedReading}</p>
      <p>End date: {endDate}</p>
      <p>Start date: {startDate}</p>
      <p>Pages per day: {pagesPerDay}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Pages:
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add result</button>
      </form>
    </div>
  );
};

export default Result;