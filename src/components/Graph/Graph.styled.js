import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const ChartWrapper = styled(Line)`
	/* background-color: white; */
	margin-bottom: 4px;
	@media screen and (min-width: 1280px) {
		/* max-width: 928px;
		max-height: 340px; */
	}
`;

export const ChartBox = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: white;
	padding: 25px 22px 20px 22px;
	margin-bottom: 32px;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
	@media screen and (min-width: 768px) {
		margin-bottom: 40px;
	}
	@media screen and (min-width: 1280px) {
		/* max-width: 928px; */
		/* max-height: 340px; */
		/* padding-left: 40px; */
		/* padding-right: 77px; */
	}
`;

export const ChartInfo = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 1.15;
	color: #898f9f;
	text-align: center;
`;


export const ChartLineName = styled.div`
display: flex;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 1.25;
	text-transform: uppercase;
	color: #091e3f;
	padding: 7px 6px 8px 5px;
	background: #f5f7fa;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	@media screen and (min-width: 1280px) {
	}
`;

export const ChartLineNameBox = styled.div`
display: flex;
justify-content: right;
align-items: center;
flex-direction: column;
	@media screen and (min-width: 1280px) {
		/* margin-right: 90px; */
	}
`;

export const ChartNumber = styled.span`
	margin-left: 8px;
	background-color: #f5f7fa;
	padding: 8px 8px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 3.16;
	text-align: center;
	text-transform: uppercase;
	color: #242a37;
	@media screen and (min-width: 1280px) {
	}
`;

export const ChartTitle = styled.h2`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 1.25;
	text-transform: uppercase;
	color: #242a37;
	padding-bottom: 21px;
	/* padding-top: 25px;
	padding-left: 23px; */
	@media screen and (min-width: 1280px) {
		/* padding-top: 35px;
		padding-left: 40px; */
	}
`;

export const ChartTime = styled.p`
	position: absolute;
width: 38px;
height: 15px;
left: 829px;
top: 749px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: right;
text-transform: uppercase;

color: #091E3F;
`;