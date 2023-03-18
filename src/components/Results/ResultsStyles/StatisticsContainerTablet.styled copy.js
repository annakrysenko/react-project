import styled from 'styled-components';

const StatisticsContainerTablet = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		width: 240px;
		margin-left: 94px;
		margin-top: 21px;
		align-items: start;
	}
	@media screen and (min-width: 1280px) {
		margin: 0;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 20px;
	}
`;

export default StatisticsContainerTablet;
