import styled from 'styled-components';

const StatisticsButton = styled.button`
	background-color: #ff6b08;
	color: white;
	border: none;
	padding: 10px 45px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	/* identical to box height */

	text-align: center;

	color: #ffffff;
	margin-top: 28px;
	margin-bottom: 24px;
	cursor: pointer;
	@media screen and (min-width: 768px) {
		margin-bottom: 0;
		margin-top: 0;
		height: 42px;
	}
`;

export default StatisticsButton;
