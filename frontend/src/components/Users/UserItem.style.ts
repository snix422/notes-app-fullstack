import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserItemWrapper = styled.div`
    width:20vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const EmailHeading = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    color:${({theme}) => theme.colors.darkGrey};
`

export const LinkNotes = styled(Link)`
    text-decoration: underline;
    font-size: ${({theme}) => theme.fontSize.l};
    color: ${({theme}) => theme.colors.darkGrey};
`