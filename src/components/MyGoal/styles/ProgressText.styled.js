import styled from 'styled-components';

const ProgressText = styled.span`
	text-align: center;
	max-width: 73px;

	font-weight: 500;
	font-size: 11px;
	line-height: 1.18;

	font-size: ${props => props.progressTextNoStat && '14px'};
	line-height: ${props => props.progressTextNoStat && '1.21'};

	color: #898f9f;

	@media screen and (min-width: 768px) {
		max-width: 100px;
		font-size: ${props => props.progressTextNoStat && '11px'};
		line-height: ${props => props.progressTextNoStat && '1.18'};
	}

	@media screen and (min-width: 1280px) {
		max-width: 80px;
		font-size: 12px;
		line-height: 1.25;
		font-size: ${props => props.progressTextNoStat && '14px'};
		line-height: ${props => props.progressTextNoStat && '1.21'};
	}
`;

export default ProgressText;



// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 17px;
// text-align: center;

// color: #898F9F;