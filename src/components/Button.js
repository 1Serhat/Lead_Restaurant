import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    padding: ${({isBig}) => (isBig ? "15px 50px" : "8px 16px")};
    background-color: darkred;
    color: #fff;
    display: inline-block;
    
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
    z-index: 2;
    &:hover{
        transform: scale(1.06);
        transition: 0.5s ease;
    }
`;