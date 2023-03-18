import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	padding: 0 20px;

	@media screen and (min-width: 768px) {
		padding: 0 32px;
	}

	@media screen and (min-width: 1280px) {
		padding: 0 16px;
	}
`;

export default Container;
