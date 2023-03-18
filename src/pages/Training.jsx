import React from 'react';
// import TimerYear from 'components/Timers/TimerYear';
// import TimerGoal from 'components/Timers/TimerGoal';
// import MyGoal from 'components/MyGoal/MyGoal';
// import Statistics from 'components/Statistics/Statistics';
// import Grafic from 'components/Grafic'
// import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';
// import MyTraining from 'components/MyTraining/MyTraining';
// import Graph from 'components/Graph/Graph';

// // import { useState, useEffect, useCallback } from 'react';
// // import myGoal from 'components/MyGoal/MyGoal';
// // import Training from 'components/MyTraining';

// const Training = () => {
//   return (
//     <>
      
//       <TimerMainContainer>
//         <TimerYear />
//         <TimerGoal />
//       </TimerMainContainer>
//       <MyGoal />
//       <MyTraining />
//       <Graph />
//       <Statistics />
//     </>
//   );
// };

// export default Training;
//=====================================================================================================



import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getGoingToRead } from '../redux/books/booksSelectors';

import MyTraining from 'components/MyTraining/MyTraining';
import Graph from '../components/Graph/Graph';
// import { useDispatch, useSelector } from 'react-redux';
import { Section, Container } from '../components/MyTraining/styles/containerTraining';
import {
	GoalTrainingBox,
	BoxPageTraining,
	BoxPageStatistics,
} from '../components/MyGoal/styles';

import MyGoal from '../components/MyGoal/MyGoal';
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
} from '../components/MyTraining/MyTraining.styled';
import TrainingList from '../components/TrainingList/TrainingList';
import InfoMobileLink from 'components/MyTraining/styles/containerTraining/InfoMobileLink.styled';
import LibraryMobileButton from 'components/MyTraining/styles/containerTraining/LibraryMobileButton.styled';

// import { NavLink } from 'react-router-dom';
// import { getCurrentlyReading } from '../redux/library/librarySelector';

export const Training = () => {
	// const dispatch = useDispatch();
	// const gcurrentlyReading = useSelector(getCurrentlyReading);
	// let trainingNow = false;

	const [booksId, setBooksId] = useState([]);
	const [start, setStart] = useState(null);
	const [finish, setFinish] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [books, setBooks] = useState([]);

	
	const goingToRead = useSelector(getGoingToRead);

	// Дата старту - готова до використання---
	const receiveDataFromStart = newValue => {
		console.log(newValue, 'newValue')
		setStart(newValue);
		const startDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
		setStartDate(startDate);
	};

	const receiveDataFromEnd = newValue => {
		setFinish(newValue);
		const endDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
		setEndDate(endDate);
	};

	const handleChange = event => {
		console.log(event.target.value);
		const {
			target: { value },
		} = event;
		setBooksId(value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		const addingToTraining = goingToRead.filter(book => book._id === booksId);

		if (books.some(({ _id }) => _id === addingToTraining[0]._id)) {
			Notiflix.Notify.failure('Ця книга вже є в твоєму списку, обирай іншу...');
			return;
		}
		setBooks([...books, ...addingToTraining]);
	};
	// console.log(books);

	const handleDelete = id => {
		return setBooks(books.filter(book => book._id !== id));
	};


	const [toggle, setToggle] = useState(true);
	const togglePage = () => {
		setToggle(!toggle);
	};

	return (
		<Section>
			<Container>
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
					<Wrapper>
						
						{toggle&&<><Title>Моє тренування</Title>
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
									<option>Обрати книги з бібліотеки</option>
									{goingToRead?.map(({ _id, title, author }) => (
										<option key={_id} value={_id}>
											{title} ({author})
										</option>
									))}
								</SelectForm>
								<Button type="button" onClick={handleSubmit}>
									Додати
								</Button>
							</WrapperSelect>
						</BoxForm>
						</>
						}

					
					</Wrapper>

					

					{!toggle&&<><GoalTrainingBox>
						<MyGoal />
						<TrainingList
							books={books}
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
					</>}
				</BoxPageTraining>

				<BoxPageStatistics>
					<GoalTrainingBox>
						<MyGoal />
						<MyTraining />
					</GoalTrainingBox>
					<Graph />
				</BoxPageStatistics>
			</Container>
		</Section>
	);
};

export default Training