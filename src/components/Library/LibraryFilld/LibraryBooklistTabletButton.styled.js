import styled from 'styled-components';

const LibraryBooklistTabletButton = styled.button`
	display: flex;
	min-width: 80px;
	justify-content: center;
	padding: 12px 11px 11px 10px;
	background-color: #6d7a8d;
	color: #ffffff;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border: none;
	cursor: pointer;
	:active {
		background-color: #ff6b08;
	}
	@media screen and (min-width: 1280px) {
		padding: 11px 35px 12px 36px;
	}
`;

export default LibraryBooklistTabletButton;
