import styled from 'styled-components';

const LibraryMobileButton = styled.button`
	position: fixed;
	bottom: 12px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	display: flex;
	background: #ff6b08;
	padding: 18px;
	border: none;
	border-radius: 50%;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default LibraryMobileButton;
