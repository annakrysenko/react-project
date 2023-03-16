import styled from 'styled-components';

const ProgressItem = styled.ul`
	display: flex;
	padding: 32px 28px;
	padding: ${props => props.progressListNoStat && '44px 30px'};
	width: ${props => props.progressListNoStat && '100%'};
	@media screen and (min-width: 768px) {
		padding: 0;
		box-shadow: none;
	}

	@media screen and (min-width: 1280px) {
		padding: 80px 18px 79px 18px;
		padding: ${props => props.progressListNoStat && '48px 34px 48px 34px'};
	}
`;

export default ProgressItem;
