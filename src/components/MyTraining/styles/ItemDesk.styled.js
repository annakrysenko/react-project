import styled from 'styled-components';

const ItemDesk = styled.li`
    position: relative;
    padding: 12px 40px 12px 0; 
    display: flex;
    font-size: 14px;
    align-items: center;
    border-bottom: 1px solid #E0E5EB;

    display: none;
    @media screen and (min-width: 768px) {
        display: flex;
    }

`

export default ItemDesk;