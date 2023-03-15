import styled from 'styled-components';

const ProgressNumber = styled.div`
	padding-top: 13px;
	padding-bottom: 12px;
	color: #091e3f;
	background-color: #f5f7fa;
	text-align: center;
	max-width: 63px;
	margin-bottom: 8px;
	max-width: ${props => props.progressNumberNoStat && '100px'};
	margin-bottom: ${props => props.progressNumberNoStat && '14px'};
	padding-top: ${props => props.progressNumberNoStat && '31px'};
	padding-bottom: ${props => props.progressNumberNoStat && '31px'};
	width: 100%;

	font-family: 'Open Sans';
	font-weight: 700;
	font-size: 35px;
	line-height: 1.08;
	color: #091e3f;
	background-color: #f5f7fa;
	box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

	@media screen and (min-width: 768px) {
		max-width: 100px;
		font-size: 40px;
		line-height: 0.95;
		padding-top: ${props => props.progressNumberNoStat && '11px'};
		padding-bottom: ${props => props.progressNumberNoStat && '11px'};
		margin-bottom: ${props => props.progressNumberNoStat && '4px'};
		max-width: ${props => props.progressNumberNoStat && '100px'};
		width: ${props => props.progressNumberNoStat && '100px'};
	}

	@media screen and (min-width: 1280px) {
		max-width: 66px;
		margin-bottom: 14px;
		font-size: 36px;
		line-height: 1.05;
		padding-top: ${props => props.progressNumberNoStat && '31px'};
		padding-bottom: ${props => props.progressNumberNoStat && '31px'};
		margin-bottom: ${props => props.progressNumberNoStat && '14px'};
		max-width: ${props => props.progressNumberNoStat && '100px'};
		font-size: ${props => props.progressNumberNoStat && '45px'};
		line-height: ${props => props.progressNumberNoStat && '0.84'};
	}
`;

export default ProgressNumber;
