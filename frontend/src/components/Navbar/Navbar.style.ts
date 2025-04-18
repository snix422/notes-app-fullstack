import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
    width:100%;
    height:100%;
    background-color:${({theme}) => theme.colors.darkGrey};
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30px;
    position: relative;
`

export const StyledLink = styled(NavLink)`
    font-size:${({theme}) => theme.fontSize.xl};
    color:${({theme}) => theme.colors.lightGrey}
`