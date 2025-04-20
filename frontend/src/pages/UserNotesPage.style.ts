import styled from "styled-components";

export const Wrapper = styled.main`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ErrorHeading = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    color: ${({theme}) => theme.colors.error};
`