import styled from 'styled-components';

const ButtonBlock = styled.div`
	width: 300px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 767px) {
		width: 100%;
		justify-content: space-around;
	}
`;

export default ButtonBlock;