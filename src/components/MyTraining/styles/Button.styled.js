import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;

    padding: 13px;
    margin: 32px auto 32px auto;

    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;

    background: #FF6B08;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    
    background-color: #FF6B08; 

    border: none;

    transition: border-radius 0.4s, box-shadow 0.4s;

    :hover {
        cursor: pointer;
        border-radius:3px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }

    @media screen and (min-width: 768px) {
        margin: 0 auto 40px auto;
    }
    @media screen and (min-width: 1280px) {
        
    }
`

export default Button;