import styled from 'styled-components';

const ProgressSubContainer = styled.div`
	display: flex;
	justify-content: center;
	width: auto;

	padding: ${props => props.progressTitle && '18px 30px'};
	padding: ${props => props.progressTitleNoStat && '18px 26px'};
	background-color: ${props => props.progressTitle && '#b1b5c2'};
	box-shadow: ${props =>
		props.progressList && '0px 2px 3px rgba(9, 30, 63, 0.1)'};

	@media screen and (min-width: 768px) {
		width: 100%;
		padding: ${props => props.progressTitle && '18px 27px'};
		margin-right: ${props => props.progressTitle && '20px'};
		margin-right: ${props => props.progressTitleNoStat && '109px'};
		max-height: ${props => props.progressTitle && '60px'};
		height: ${props => props.progressTitle && '100%'};
		box-shadow: ${props => props.progressList && 'none'};
	}

	@media screen and (min-width: 1280px) {
		width: auto;
		margin-right: ${props => props.progressTitle && '0'};
		padding: ${props => props.progressTitle && '18px 28px'};
	}
`;

export default ProgressSubContainer;
