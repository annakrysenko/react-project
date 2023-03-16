import styled from 'styled-components';

const LibraryBooklistRow = styled.tr`
	display: flex;
	justify-content: flex-start;
	:not(:last-child) {
		margin-bottom: 14px;
	}
	:first-child {
		margin-bottom: 12px;
	}
`;

export default LibraryBooklistRow;
