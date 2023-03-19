
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
	Button  
} from '../LibraryFilld';

import ResumeModal from '../BookProcesing/Resume/ResumeModal';

import {Modal} from 'components/Modal/Modal';
import ConteinerModal from '../LibraryFilld/ConteinerModal.styled';
import Rating from '@mui/material/Rating';
import { getCurrentlyReading, getFinishedReading, getGoingToRead } from 'redux/books/booksSelectors';
import { useState } from 'react';

function LibraryFilld() {
  const goingToRead = useSelector(getGoingToRead);
  const finishedReading = useSelector(getFinishedReading);
  const currentlyReading = useSelector(getCurrentlyReading);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null); // додали новий стан

  const handleClick = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setSelectedBookId(null); // оновлюємо стан
  };

  const toggleModal = (id) => {
    setSelectedBookId(id); // оновлюємо стан
  };

	return (
		<>
			<LibraryControlTabletSection>
				{(isVisible && finishedReading.length > 0) && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Already read</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Book title
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Author
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Year
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right>
										Pages
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell colspan="2" ratingPadding>
										Rating
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
 														onClick={() => toggleModal(_id)}
													>
 															 Resume
													</LibraryBooklistTabletButton>

													{selectedBookId === _id && (
													<Modal toggleModal={toggleModal} closeModal={closeModal}>
														<ConteinerModal>
																 <ResumeModal toggleModal={toggleModal} bookId={_id} />
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
        {(isVisible && currentlyReading.length > 0) && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Reading now</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Book title
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Author
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Year
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Pages
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
							Going to read 
						</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Book title
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Author
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Year
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Pages
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
				{(isVisible && finishedReading.length > 0) && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Already read</LibraryBooklistTitle>
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
													<LibraryBooklistCell>Author:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Year:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Pages:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell middle>
														Rating:
													</LibraryBooklistCell>
													<LibraryBooklistCell middle>
														<Rating name="read-only" value={rating} readOnly />
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
										<LibraryBooklistButton
											type="button"
											onClick={() => toggleModal(_id)}
										>
											Resume
										</LibraryBooklistButton>
											{selectedBookId === _id && (
													<Modal toggleModal={toggleModal} closeModal={closeModal}>
														<ConteinerModal>
														 <ResumeModal toggleModal={toggleModal} bookId={_id} />
														</ConteinerModal>
													</Modal>
)}
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
                )}
        {(isVisible && currentlyReading.length > 0) && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Reading now</LibraryBooklistTitle>
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
													<LibraryBooklistCell>Author:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Year:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Pages:</LibraryBooklistCell>
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
						<LibraryBooklistTitle>Going to read </LibraryBooklistTitle>
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
													<LibraryBooklistCell>Author:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Year:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Pages:</LibraryBooklistCell>
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
			< Button onClick={handleClick}>My training </Button>
        </>
        
	);
}

export default LibraryFilld;