import styled from 'styled-components';

const LibraryBooklistCell = styled.td`
	display: flex;
	vertical-align: ${props => props.middle && 'middle'};
	:first-child {
		min-width: 81px;
		color: #898f9f;
	}
`;

export default LibraryBooklistCell;
