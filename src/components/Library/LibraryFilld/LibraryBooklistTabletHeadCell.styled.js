import styled from 'styled-components';

const LibraryBooklistTabletHeadCell = styled.th`
	text-align: ${props => (props.right ? 'right' : 'left')};
	padding-left: ${props => props.ratingPadding && '32px'};
	padding-right: ${props => props.yearPadding && '36px'};
	padding-left: ${props => props.authorPadding && '21px'};
	padding-right: ${props => props.pagesPadding && '20px'};
	@media screen and (min-width: 1280px) {
		padding-left: ${props => props.ratingPadding && '110px'};
		padding-right: ${props => props.yearPadding && '73px'};
		padding-left: ${props => props.authorPadding && '41px'};
		padding-right: ${props => props.pagesPadding && '77px'};
	}
`;

export default LibraryBooklistTabletHeadCell;
