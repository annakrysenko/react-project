import styled from 'styled-components';

const DeleteIcon = styled.button`
    position: absolute;
    right: 0;

    fill: #A6ABB9;
    top: 20px;
    border: none;
    background: none;
    transition: fill 0.3s;

    :hover, :focus{
        fill: #FF6B08;
    }
`

export default DeleteIcon;