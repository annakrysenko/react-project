// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import { ReviewContext } from 'components/ReviewContext/ReviewContext';
// import { useContext, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
// 	ModalTitle,
// 	RaitingBlok,
// 	RaitingStar,
// 	ResumeTitle,
// 	InputModal,
// 	ButtonBlock,
// 	ButtonModal,
// } from 'ui/LibraryModal';
// import { addBookReview } from '../../../redux/library/libraryOperation';

// function LibraryModal() {
// 	const [newValue, setNewValue] = useState(null);
// 	const [coment, setComent] = useState('');

// 	const dispatch = useDispatch();

// 	const { isModal, toogleModal } = useContext(ReviewContext);

// 	const typeOfChange = {
// 		'simple-controlled': setNewValue,
// 		review: setComent,
// 	};

// 	const handleChange = ({ target: { name, value } }) => {
// 		typeOfChange[name](value);
// 	};

// 	const handleAddReview = () => {
// 		dispatch(
// 			addBookReview({
// 				bookId: isModal,
// 				rating: newValue,
// 				feedback: coment,
// 			})
// 		);
// 		toogleModal();
// 		setNewValue(null);
// 		setComent('');
// 	};

// 	return (
// 		<>
// 			<ModalTitle>Обрати Рейтинг книги</ModalTitle>
// 			<RaitingBlok>
// 				<RaitingStar>
// 					<Typography component="legend"></Typography>
// 					<Rating
// 						name="simple-controlled"
// 						value={+newValue}
// 						onChange={handleChange}
// 					/>
// 				</RaitingStar>
// 				<ResumeTitle>
// 					<label htmlFor="content">Резюме</label>
// 				</ResumeTitle>
// 				<InputModal>
// 					<textarea
// 						style={{ width: '100%' }}
// 						onChange={handleChange}
// 						rows="10"
// 						cols="50"
// 						id="content"
// 						name="review"
// 					></textarea>
// 				</InputModal>
// 			</RaitingBlok>
// 			<ButtonBlock>
// 				<ButtonModal type="button" onClick={toogleModal}>
// 					Назад
// 				</ButtonModal>
// 				<ButtonModal type="button" onClick={handleAddReview}>
// 					Рейтинг
// 				</ButtonModal>
// 			</ButtonBlock>
// 		</>
// 	);
// }

// export default LibraryModal;



import React from 'react'


const LibraryModal = () => {
  return (
	<div>LibraryModal</div>
  )
}



export default LibraryModal

//test