import styled from "styled-components";

export const FormWrapper = styled.form`
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:25px;
    padding:30px;
`

export const Input = styled.input`
    border: 2px solid black;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px;
    background: none;
    width: 20%;
    outline: none;
`;

export const TextArea = styled.textarea`
    border: 2px solid black;
    font-size: 20px;
    padding: 10px;
    background: none;
    width: 40%;
    min-height: 100px;
    resize: vertical;
    font-family: inherit;
    border-radius: 4px;
`;

export const Select = styled.select`
    border: 2px solid black;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px;
    background: none;
    width: 10%;
    outline: none;
    cursor: pointer;
    appearance: none;
    text-align:center;
`;

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top:20px;
    
    &:hover {
        background: black;
        color: white;
    }

`;