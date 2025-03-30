import styled from "styled-components";

export const TitleStyled = styled.h1`
    font-size:${({theme}) => theme.fontSize.l};
    color:${({theme}) => theme.colors.darkGrey};

    &.title-large{
        font-size:${({theme}) => theme.fontSize.xxl};
    }
    &.title-small{
        font-size:${({theme}) => theme.fontSize.m};
    }
`