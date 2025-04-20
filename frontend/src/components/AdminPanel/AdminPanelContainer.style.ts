import styled from "styled-components";

export const AdminWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 3rem;

    @media(max-width:1024px){
        padding-bottom: 0;
        align-items: center;
    }
`

export const TitleHeading = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    color:${({theme}) => theme.colors.darkGrey}
`