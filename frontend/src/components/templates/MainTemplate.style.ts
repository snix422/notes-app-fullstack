import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 5vh 5vh auto;
    grid-template-columns: 70% 30%;
    width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGrey};

    @media(max-width:1024px){
        height: auto;
        grid-template-columns: 100%;
        grid-template-rows: 5vh 10vh auto auto;
        overflow: visible;
    }
`;

export const NavbarWrapper = styled.div`
    grid-column: 1 / 3;
    background-color: ${({ theme }) => theme.colors.lightGreyNav || "black"};
    display: flex;
    align-items: center;
    color: white;
`

export const SearchbarWrapper = styled.div`
    grid-column: 1 / 3;
    background-color: ${({ theme }) => theme.colors.searchBar || "gray"};
    display: flex;
    align-items: center;
`;

export const MainContent = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    background-color: ${({ theme }) => theme.colors.lightGreyBody || "white"};
    overflow-y: auto;
    padding-bottom: 2rem;

    @media(max-width:1024px) {
        grid-row: 3/4;
        grid-column: 1/2;
    }
`;

export const ArticlesSection = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    background-color: ${({ theme }) => theme.colors.darkGrey || "#f0f0f0"};
    overflow-y: auto;

    @media(max-width:1024px){
        min-height: 100vh;
        grid-row: 4 / 5;
        grid-column: 1 / 2;
    }
`;