import styled from "styled-components";

export const SearchbarWrapper = styled.div`
    width:100%;
    /*background-color: ${({ theme }) => theme.colors.lightGrey || "gray"};*/
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    gap: 10px;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 600px;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 8px 12px;
    font-size: 16px;
    border: 2px solid ${({ theme }) => theme.colors.darkGrey || "#ccc"};
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    width: 50%;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary || "black"};
    }
`;

export const SearchSelect = styled.select`
    padding: 8px 12px;
    font-size: 16px;
    border: 2px solid ${({ theme }) => theme.colors.darkGrey || "#ccc"};
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    outline: none;
    width: 50%;
`;
