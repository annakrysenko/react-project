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
import { useDispatch, useSelector } from 'react-redux';
import { addBookPlanning } from '../../redux/books/booksOperations';
// import { Navigate } from 'react-router-dom';

import { ReactComponent as CheckboxCheked } from '../../images/svg/checkboxChecked.svg';
import { ReactComponent as CheckboxDisabled } from '../../images/svg/checkboxDisabled.svg';
import { getCurrentlyReading } from 'redux/books/booksSelectors';

function TrainingList({ books, startDate, endDate, booksDelete }) {
	const dispatch = useDispatch();

	const currentlyReading = useSelector(getCurrentlyReading)
	// console.log(currentlyReading, 'currentlyReading' , books, 'books');

	// console.log('books statistics', books);
	let booksToRender;
	books.length > 0 ? booksToRender = books : booksToRender = currentlyReading


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
		console.log(pagesFinished,pagesTotal )
		return pagesFinished !== pagesTotal ? (
			<CheckboxDisabled />
		) : (
			<CheckboxCheked />
		);
	};
// console.log('currentlyReading',currentlyReading )
	
	return (
		
		<>
			<Wrapper>
				{currentlyReading ? 
					<ListMob>
						{/* booksToReading */}
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
											{currentlyReading.length === 0 ? (
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
											Author:1
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
											Year:
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
											Page:
										</div>
										<div>{pagesTotal}</div>
									</div>
									{currentlyReading.length === 0 && (
										<DeleteIcon>
											<Del className={css.delButton} />
											
										</DeleteIcon>
									)}
								</ItemMob>
							)
						)} {currentlyReading.length === 0 &&(<ItemDesk>
							<Flat style={{ marginRight: '12px' }} />
							<p>...</p>
						</ItemDesk>)}
					</ListMob> : 
					<ListMob>
						<ItemMob>
							<div className={css.bookNameMob}>
								<FlatWrapper>
									{currentlyReading.length === 0 ? (
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
									Author:
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
									Year:
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
									Page:
								</div>
								<div>...</div>
							</div>
							{currentlyReading.length === 0 && (
								<DeleteIcon>
									<Del className={css.delButton} />
								</DeleteIcon>
							)}
						</ItemMob>
					</ListMob>}
				
					

				
				
					
						<Button>Start training</Button>
					
			</Wrapper>

		{/* desk */}
			<ListDesk>
				<Title>
					<BookName>Book name</BookName>
					<AuthorName>Author</AuthorName>
					<PublishYear>Year</PublishYear>
					<Pages>Page</Pages>
				</Title>
				

				
				{booksToRender?.map(
					({ _id, title, author, publishYear, pagesTotal, pagesFinished }) => (
						<ItemDesk key={_id}>
							<BookName className={css.bookName}>
								<div style={{ marginRight: '15px' }}>
									{currentlyReading.length === 0? (
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
							{currentlyReading.length === 0 &&(
								< button
									className={css.delButton}
							type="button"
							onClick={() => booksDelete(_id)}
								>
							<Del className={css.svgDel} />
						</button>
							)}
						</ItemDesk>
					)
				)} {currentlyReading.length === 0 &&(<ItemDesk>
							<Flat style={{ marginRight: '12px' }} />
							<p>...</p>
						</ItemDesk>)}
			</ListDesk>
				{currentlyReading.length > 0 && currentlyReading.length === 0 && (
					<Button type="button" onClick={handleAddBookPlanning}>
						Start training
					</Button>
				)}
		</>
	);
}

export default TrainingList;
