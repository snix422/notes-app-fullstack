import styled from "styled-components";
import { Link } from "react-router-dom";


export const AuthLinksContainer = styled.div`
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
    gap:10px;

    @media(max-width:1024px){
        position: static;
        justify-content: center;
        width: 100%;
    }
`

export const AuthLink = styled(Link)`
    color: white;
    font-size: ${({theme}) => theme.fontSize.l };
`
export const LogOutButton = styled.button`
    padding:0.5rem 1rem;
    border-radius:0.3rem;
    background-color: ${({theme}) => theme.colors.error};
    font-size: ${({theme}) => theme.fontSize.l};
    color:${({theme}) => theme.colors.white};
    font-family:"Montserrat";
    border:none;
`