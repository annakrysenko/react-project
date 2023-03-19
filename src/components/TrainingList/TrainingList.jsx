import {
	ListMob,
	ListDesk,
	Title,
	ItemMob,
	Button,
	DeleteIcon,
	Wrapper,
	FlatWrapper,
	ItemDesk,
	BookName,
	AuthorName,
	PublishYear,
	Pages,
} from './styles';
import { ReactComponent as Flat } from '../../images/svg/Flat.svg';
import { ReactComponent as Del } from '../../images/svg/delete.svg';
import css from './TrainingList.module.css';
import { useDispatch } from 'react-redux';
import { addBookPlanning } from '../../redux/books/booksOperations';
// import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as CheckboxCheked } from '../../images/svg/checkboxChecked.svg';
import { ReactComponent as CheckboxDisabled } from '../../images/svg/checkboxDisabled.svg';

function TrainingList({ books, startDate, endDate, booksDelete }) {
	const dispatch = useDispatch();
	const location = useLocation();
	// console.log(location.pathname);
	// location.pathname === '/training'
	// console.log('books statistics', books);

	const booksId = books.map(book => book._id);
	const data = {
		startDate: startDate,
		endDate: endDate,
		books: booksId,
	};

	const handleAddBookPlanning = () => {
		dispatch(addBookPlanning(data));
	};

	const CheckBox = ({ pagesFinished, pagesTotal }) => {
		return pagesFinished !== pagesTotal ? (
			<CheckboxDisabled />
		) : (
			<CheckboxCheked />
		);
	};

	return (
		<>
			<Wrapper>
				{books ? 
					<ListMob>
						{books?.map(
							({
								_id,
								title,
								author,
								publishYear,
								pagesTotal,
								pagesFinished,
							}) => (
								<ItemMob key={_id}>
									<div className={css.bookNameMob}>
										<FlatWrapper>
											{location.pathname === '/training' ? (
												<Flat />
											) : (
												<CheckBox
													pagesFinished={pagesFinished}
													pagesTotal={pagesTotal}
												/>
											)}
										</FlatWrapper>
										<div style={{ padding: '0 25px 0 0' }}>{title}</div>
									</div>

									<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
										<div style={{
												marginRight: '15px',
												color: '#898F9F',
												width: '35%',
											}}>
											Автор:
										</div>
										<div>{author}</div>
									</div>
									<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
										<div
											style={{
												margin: '0 15px 0 0',
												color: '#898F9F',
												width: '35%',
											}}
										>
											Рік:
										</div>
										<div>{publishYear}</div>
									</div>
									<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
										<div
											style={{
												marginRight: '15px',
												color: '#898F9F',
												width: '35%',
											}}
										>
											Стор.:
										</div>
										<div>{pagesTotal}</div>
									</div>
									{location.pathname === '/training' && (
										<DeleteIcon>
											<Del className={css.delButton} />
											
										</DeleteIcon>
									)}
								</ItemMob>
							)
						)} <ItemDesk>
								<Flat style={{marginRight: '12px'}} />
								<p>...</p>
							</ItemDesk>
					</ListMob> : 
					<ListMob>
						<ItemMob>
							<div className={css.bookNameMob}>
								<FlatWrapper>
									{location.pathname === '/training' ? (
										<Flat />
									) : (
										<CheckBox />
									)}
								</FlatWrapper>
							</div>

							<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
								<div style={{
										marginRight: '15px',
										color: '#898F9F',
										width: '35%',
									}}>
									Автор:
								</div>
								<div>...</div>
							</div>
							<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
								<div
									style={{
										margin: '0 15px 0 0',
										color: '#898F9F',
										width: '35%',
									}}
								>
									Рік:
								</div>
								<div>...</div>
							</div>
							<div style={{ display: 'flex', margin: '0 0 14px 35px' }}>
								<div
									style={{
										marginRight: '15px',
										color: '#898F9F',
										width: '35%',
									}}
								>
									Стор.:
								</div>
								<div>...</div>
							</div>
							{location.pathname === '/training' && (
								<DeleteIcon>
									<Del className={css.delButton} />
								</DeleteIcon>
							)}
						</ItemMob>
					</ListMob>}
				
					

				
				
					{/* {books.length > 0 && location.pathname === '/training' && (
						<Button>Почати тренування</Button>
					)} */}
			</Wrapper>

		{/* desk */}
			<ListDesk>
				<Title>
					<BookName>Назва книги</BookName>
					<AuthorName>Автор</AuthorName>
					<PublishYear>Рік</PublishYear>
					<Pages>Стор.</Pages>
				</Title>
				{/* <ListDesk> */}
				{books?.map(
					({ _id, title, author, publishYear, pagesTotal, pagesFinished }) => (
						<ItemDesk key={_id}>
							<BookName className={css.bookName}>
								<div style={{ marginRight: '15px' }}>
									{location.pathname === '/training' ? (
										<Flat />
									) : (
										<CheckBox
											pagesFinished={pagesFinished}
											pagesTotal={pagesTotal}
										/>
									)}
								</div>
								<p>{title}</p>
							</BookName>
							<AuthorName>{author}</AuthorName>
							<PublishYear>{publishYear}</PublishYear>
							<Pages>{pagesTotal}</Pages>
							{location.pathname === '/training' && (
								<button
									className={css.delButton}
									type="button"
									onClick={() => booksDelete(_id)}
								>
									<Del className={css.svgDel} />
								</button>
							)}
						</ItemDesk>
					)
				)} <ItemDesk>
						<Flat style={{marginRight: '16px'}} /><p>...</p>
					</ItemDesk>
			</ListDesk>
				{books.length > 0 && location.pathname === '/training' && (
					<Button type="button" onClick={handleAddBookPlanning}>
						Почати тренування
					</Button>
				)}
		</>
	);
}

export default TrainingList;
