import styled from 'styled-components';

const LibraryBooklistSubContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding: 20px;
	background: #ffffff;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

export default LibraryBooklistSubContainer;
