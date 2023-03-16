import styled from 'styled-components';

const LibraryBooklistContainer = styled.h2`
	margin-bottom: 20px;
	margin-bottom: ${props => props.tabletSize && '16px'};
	font-weight: 600;
	font-size: 19px;
	line-height: 1.21;
`;

export default LibraryBooklistContainer;
