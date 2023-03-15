import styled from 'styled-components';

const ProgressItem = styled.li`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	:not(:last-child) {
		margin-right: 12px;
		margin-right: ${props => props.progressItemNoStat && '20px'};
	}
	@media screen and (min-width: 768px) {
		:not(:last-child) {
			margin-right: 20px;
			margin-right: ${props => props.progressItemNoStat && '40px'};
		}
	}
	@media screen and (min-width: 768px) {
		:not(:last-child) {
			margin-right: ${props => props.progressItemNoStat && '20px'};
		}
	}
`;

export default ProgressItem;
