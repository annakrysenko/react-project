
import { useSelector } from 'react-redux';
import {
	LibraryBooklistContainer,
	LibraryBooklistTitle,
	LibraryBooklistSubContainer,
	LibraryBooklistTable,
	LibraryBooklistRow,
	LibraryBooklistCell,
	LibraryBooklistNameCell,
	LibraryBooklistButton,
	LibraryControlMobileSection,
	LibraryControlTabletSection,
	LibraryBooklistTabletButton,
	LibraryBooklistTabletTable,
	LibraryBooklistTabletHead,
	LibraryBooklistTabletHeadCell,
	LibraryBooklistTabletBody,
	LibraryBooklistTabletBodyCell,
	LibraryBooklistTabletRow,
} from '../LibraryFilld';

import ResumeModal from '../BookProcesing/Resume/ResumeModal';

import {Modal} from 'components/Modal/Modal';
import ConteinerModal from '../LibraryFilld/ConteinerModal.styled';

import Rating from '@mui/material/Rating';
import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';

function LibraryFilld(props) {
	const goingToRead = useSelector(getGoingToRead);
	const finishedReading = useSelector(getFinishedReading);
    const currentlyReading = useSelector(getCurrentlyReading);
    
//      const toggleModal = (id) => {
//     // ваш код для відкриття/закриття модального вікна
//          console.log(toggleModal);
//   };

	return (
		<>
			<LibraryControlTabletSection>
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Already read</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right>
										Стор.
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell colspan="2" ratingPadding>
										Рейтинг книги
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{finishedReading.map(
									({ title, author, publishYear, pagesTotal, _id, rating }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknamePadding
													tabletBooknameWidth
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell ratingPadding middle>
													<Rating name="read-only" value={rating} readOnly />
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell buttonPadding>
													<LibraryBooklistTabletButton
														type="button"
														onClick={() => props.toggleModal(_id)}
													>
														Резюме
													</LibraryBooklistTabletButton>

													{props.isModal === _id && (
														<Modal toggleModal={props.toggleModal}>
															<ConteinerModal>
																<ResumeModal toggleModal={props.toggleModal} />
															</ConteinerModal>
														</Modal>
													)}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
                                    }
                                    				)}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
                )}
        {currentlyReading.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Читаю</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Стор.
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{currentlyReading.map(
									({ title, author, publishYear, pagesTotal, _id }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknameFullPadding
													tabletBooknameWidth
													orange
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right pagesPadding>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
									}
								)}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
                )}
        	{goingToRead.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>
							Маю намір прочитати
						</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Стор.
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{goingToRead.map(
									({ title, author, publishYear, pagesTotal, _id }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknameFullPadding
													tabletBooknameWidth
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right pagesPadding>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
									}
								)}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
				)}
            </LibraryControlTabletSection>
        
        <LibraryControlMobileSection>
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Прочитано</LibraryBooklistTitle>
						{finishedReading.map(
							({ title, author, publishYear, pagesTotal, _id, rating }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell middle>
														Рейтинг:
													</LibraryBooklistCell>
													<LibraryBooklistCell middle>
														<Rating name="read-only" value={rating} readOnly />
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
										<LibraryBooklistButton
											type="button"
											onClick={() => props.toggleModal(_id)}
										>
											Резюме
										</LibraryBooklistButton>

										{props.isModal === _id && (
	<Modal toggleModal={props.toggleModal}>
		<ConteinerModal>
			<ResumeModal toggleModal={props.toggleModal} />
		</ConteinerModal>
	</Modal>
)}
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
                )}
        {currentlyReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Читаю</LibraryBooklistTitle>
						{currentlyReading.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell orange colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
				{goingToRead.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Маю намір прочитати</LibraryBooklistTitle>
						{goingToRead.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
			</LibraryControlMobileSection>
		</>
	);
}

export default LibraryFilld;