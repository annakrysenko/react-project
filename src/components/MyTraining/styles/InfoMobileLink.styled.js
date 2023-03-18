import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const InfoMobileLink = styled.button`
	display: flex;
	/* text-decoration: none; */
	cursor: pointer;
	border: none;
	margin-bottom: 40px;
	margin: ${props => (props.linkstyle ? '0 0 32px 0' : '40px auto 0 auto')};
	padding: ${props => (props.linkstyle ? '0' : '11px 52px 12px 54px')};
	background-color: ${props => (props.linkstyle ? 'transparent' : '#ff6b08')};
	color: ${props => (props.linkstyle ? '#ff6b08' : '#ffffff')};
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	box-shadow: ${props =>
		props.linkstyle ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.25);'};
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default InfoMobileLink;
