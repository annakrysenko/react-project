import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(43, 43, 43, 0.1);
	z-index: 1200;
`;

export const ModalWindow = styled.div`
	// width: 394px;
	// height: 204px;
	background-color: #fff;
	box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

	// @media screen and (max-width: 767px) {
	// 	width: 280px;
	// 	height: 222px;
	// }
`;

export const IconConteiner = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 14px;
`;

export const ModalLogoutText = styled.div`
	font-family: 'Montserrat';
	font-weight: 500;
	font-size: 16px;
	line-height: 1.4;
	text-align: center;
	color: #242a37;
`;

export const ButtonExit = styled.button`
	width: 130px;
	height: 40px;
	border: none;
	background-color: #ff6b08;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.2;
	color: #ffffff;
	box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
	}

	@media screen and (max-width: 767px) {
		width: 98px;
		height: 40px;
	}
`;

export const ButtonLogout = styled.button`
	width: 130px;
	height: 40px;
	border: none;
	background-color: #ff6b08;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.2;
	color: #ffffff;
	box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
	}

	@media screen and (max-width: 767px) {
		width: 98px;
		height: 40px;
	}
`;

export const ButtonTreining = styled.button`
	width: 152px;
	height: 40px;
	border: none;
	background-color: #ff6b08;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.2;
	color: #ffffff;
	box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);

	&:hover {
		color: #242a37;
		border: 1px solid #242a37;
		background: #ffffff;
		box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
	}

	@media screen and (max-width: 767px) {
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

export const ButtonConteiner = styled.div`
	display: flex;
	justify-content: space-between;
    padding-top: 24px;
`;

export const ButtonConteinerCentred = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 24px;
`;


export const ButtonConteinerStats = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding-top: 24px;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
		padding-top: 16px;
	}
`;

export const ModalConteiner = styled.div`
	padding: 48px 53px;
	width: 290px;

	@media screen and (max-width: 767px) {
		padding: 48px 35px;
		width: 210px;
	}
`;

export const ModalConteinerFinal = styled.div`
	padding: 40px 83px;
	width: 228px;

	@media screen and (max-width: 767px) {
		padding: 40px 27px;
		width: 210px;
	}
`;

export const ConteinerStats = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 336px;
	// height: 296px;
	padding: 40px 29px 48px;

	@media screen and (max-width: 767px) {
		padding: 40px 32px;
		width: 210px;
	
	}
`;
