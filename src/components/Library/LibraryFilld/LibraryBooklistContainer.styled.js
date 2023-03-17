import styled from 'styled-components';

const LibraryBooklistContainer = styled.div`
	font-family: 'Montserrat';
	color: #242a37;
	:not(:last-child) {
		margin-bottom: 20px;
		margin-bottom: ${props => props.tabletSize && '40px'};
	}
`;

export default LibraryBooklistContainer;
