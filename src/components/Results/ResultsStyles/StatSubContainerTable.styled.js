import styled from 'styled-components';

const StatSubContainerTable = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		gap: 32px;
		align-items: end;
		margin: 0 auto;
		flex-direction: initial;
	}
	@media screen and (min-width: 1280px) {
		flex-direction: column;
	}
`;

export default StatSubContainerTable;
