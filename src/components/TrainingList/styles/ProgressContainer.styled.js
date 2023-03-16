import styled from 'styled-components';

const ProgressContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0;
	font-family: 'Montserrat';
	background-color: #ffffff;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 43px 15px 42px;
		padding: ${props => props.progressContainerNoStat && '20px 52px 8px 28px'};
	}

	@media screen and (min-width: 1280px) {
		flex-direction: column;
		max-width: 288px;
		width: 100%;
		max-height: 329px;
		height: 100%;
		padding: 0;
		margin-bottom: 40px;
	}
`;

export default ProgressContainer;
