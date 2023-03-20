import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getCurrentlyReading,
  getGoingToRead,
} from '../../redux/books/booksSelectors';
import Graph from 'components/Graph/Graph';
import LibraryMobileButton from 'components/MyTraining/styles/LibraryMobileButton.styled';
import {
  WrapperDatePicker,
  Wrapper,
  Title,
  BoxForm,
  SelectForm,
  WrapperCallendar,
  BoxCallendar,
  WrapperSelect,
  Button,
} from './MyTraining.styled';
import TrainingList from '../TrainingList/TrainingList';
import { BoxPageTraining, GoalTrainingBox } from './styles';
import InfoMobileLink from './styles/InfoMobileLink.styled';
import MyGoal from 'components/MyGoal/MyGoal';

export default function MyTraining() {
  const [booksId, setBooksId] = useState([]);
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [books, setBooks] = useState([]);

  const goingToRead = useSelector(getGoingToRead);

  const currentlyReading = useSelector(getCurrentlyReading);

  const receiveDataFromStart = newValue => {
    setStart(newValue);
    const startDate = `${newValue.$y}-${String(newValue.$M + 1).padStart(
      2,
      '0'
    )}-${newValue.$D}`;
    setStartDate(startDate);
  };

  const receiveDataFromEnd = newValue => {
    setFinish(newValue);
    const endDate = `${newValue.$y}-${String(newValue.$M + 1).padStart(
      2,
      '0'
    )}-${String(newValue.$D).padStart(2, '0')}`;

    setEndDate(endDate);
  };
  console.log('endDate', endDate);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setBooksId(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const addingToTraining = goingToRead.filter(book => book._id === booksId);

    if (books.some(({ _id }) => _id === addingToTraining[0]._id)) {
      toast.failure('This book is already in your list, choose another one');

      return;
    }
    setBooks([...books, ...addingToTraining]);
  };

  const [toggle, setToggle] = useState(true);
  const togglePage = () => {
    setToggle(!toggle);
  };
  const handleDelete = id => {
    return setBooks(books.filter(book => book._id !== id));
  };
  // console.log('currentlyReading', currentlyReading )
  return (
    <>
      <BoxPageTraining>
        {toggle && (
          <InfoMobileLink
            disabled={!toggle}
            onClick={togglePage}
            linkstyle="true"
          >
            <svg
              width="24"
              height="12"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.274948 6.68502C0.275228 6.68531 0.275463 6.68565 0.275791 6.68594L5.17442 11.7182C5.54141 12.0952 6.13498 12.0938 6.50028 11.7149C6.86553 11.3361 6.86412 10.7234 6.49714 10.3463L3.2082 6.96774L23.0625 6.96774C23.5803 6.96774 24 6.53448 24 6C24 5.46552 23.5803 5.03226 23.0625 5.03226L3.20825 5.03226L6.49709 1.65368C6.86408 1.27664 6.86548 0.663918 6.50023 0.285095C6.13494 -0.0938247 5.54131 -0.0951303 5.17437 0.281805L0.275745 5.31407C0.275463 5.31436 0.275228 5.31469 0.2749 5.31498C-0.0922724 5.69328 -0.0910993 6.30799 0.274948 6.68502Z"
                fill="#FF6B08"
              />
            </svg>
          </InfoMobileLink>
        )}

        {!toggle && (
          <>
            <GoalTrainingBox>
              <MyGoal />
              <TrainingList
                books={books}
                currentlyReading={books}
                startDate={startDate}
                endDate={endDate}
                booksDelete={handleDelete}
              />
            </GoalTrainingBox>
            <Graph />
            <LibraryMobileButton onClick={togglePage} type="button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1999 7.19998H8.80002V0.799949C8.80002 0.358446 8.44158 0 7.99993 0C7.55842 0 7.19998 0.358446 7.19998 0.799949V7.19998H0.799949C0.358446 7.19998 0 7.55842 0 7.99993C0 8.44158 0.358446 8.80002 0.799949 8.80002H7.19998V15.1999C7.19998 15.6416 7.55842 16 7.99993 16C8.44158 16 8.80002 15.6416 8.80002 15.1999V8.80002H15.1999C15.6416 8.80002 16 8.44158 16 7.99993C16 7.55842 15.6416 7.19998 15.1999 7.19998Z"
                  fill="white"
                />
              </svg>
            </LibraryMobileButton>
          </>
        )}
      </BoxPageTraining>
      <Wrapper>
        {/* {currentlyReading.length !== 0 && (<Title>My training</Title>)} */}
        <Title>My training</Title>
        {currentlyReading.length === 0 && (
          <BoxForm>
            <WrapperCallendar>
              <BoxCallendar>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <WrapperDatePicker
                    label="Початок"
                    value={start}
                    disablePast={true}
                    onChange={receiveDataFromStart}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </BoxCallendar>
              <BoxCallendar>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <WrapperDatePicker
                    label="Завершення"
                    value={finish}
                    disablePast={true}
                    onChange={receiveDataFromEnd}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </BoxCallendar>
            </WrapperCallendar>
            <WrapperSelect>
              <SelectForm name="select" onChange={handleChange}>
                <option>Choose book from the library</option>
                {goingToRead?.map(({ _id, title, author }) => (
                  <option key={_id} value={_id}>
                    {title} ({author})
                  </option>
                ))}
              </SelectForm>
              <Button type="button" onClick={handleSubmit}>
                Add
              </Button>
            </WrapperSelect>
          </BoxForm>
        )}

        <TrainingList
          books={books}
          startDate={startDate}
          endDate={endDate}
          booksDelete={handleDelete}
        />
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
