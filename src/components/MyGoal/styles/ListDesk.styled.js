import styled from 'styled-components';

const ListDesk = styled.ul`
	padding: 0;
	margin: 0 auto 32px auto;
  max-height: 171px;
  overflow: scroll;
  
  list-style: none;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  font-family: Montserrat;
  font-size: 12px;
  color: #242A37;
  font-weight: 500;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: Montserrat;
	font-size: 12px;
	color: #242a37;
	font-weight: 500;

	display: none;

	@media screen and (min-width: 768px) {
		display: block;
	}

	@media screen and (min-width: 1280px) {
		margin: 0 0 40px 0;
	}
`;

export default ListDesk;
