import styled from "styled-components";
import { Link } from "react-router-dom";


export const AuthLinksContainer = styled.div`
    position: absolute;
    right: 50px;
    display: flex;
    gap:10px;
`

export const AuthLink = styled(Link)`
    color: white;
    font-size: ${({theme}) => theme.fontSize.l };
`