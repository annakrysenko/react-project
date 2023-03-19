import styled from 'styled-components';

const StatPagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	align-items: center;
	@media screen and (min-width: 768px) {
		width: 704px;
		/* min-height: 309px; */

		background: #ffffff;
		box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
		align-items: start;
	}
	@media screen and (min-width: 1280px) {
		height: 340px;
		width: 288px;
		align-items: center;
		padding-top: 20px;
	}
`;

export default StatPagesContainer;
