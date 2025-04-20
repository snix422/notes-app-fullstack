import styled from "styled-components";

export const DescriptionContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 3rem 0 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
`

export const MainTitle = styled.div`
    color: ${({theme}) => theme.colors.darkGrey};
    font-size: ${({theme}) => theme.fontSize.xl};
`

export const SubTitle = styled.div`
    color: ${({theme}) => theme.colors.darkGrey};
    font-size: ${({theme}) => theme.fontSize.l};
`