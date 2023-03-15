import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getGoingToRead } from '../../redux/library/librarySelector';

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


export default function MyTraining() {
	const [booksId, setBooksId] = useState([]);
	const [start, setStart] = useState(null);
	const [finish, setFinish] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [books, setBooks] = useState([]);

	
	const goingToRead = useSelector(getGoingToRead);

	// Дата старту - готова до використання---
	const receiveDataFromStart = newValue => {
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

	return (
		<>
		
					<Wrapper>
			<Title>Моє тренування</Title>
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
				<SelectForm name="select"  onChange={handleChange}>
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
			
			<TrainingList
				books={books}
				startDate={startDate}
				endDate={endDate}
				booksDelete={handleDelete}
			/>
		</Wrapper>
		</>
		
	);
}
