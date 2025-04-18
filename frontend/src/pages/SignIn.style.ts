import styled from "styled-components";

export const MainWrapper = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
    background-color: beige;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    margin-top: 4rem;
`

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid black;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    width: 15vw;
`

export const Button = styled.button`
    border-radius: 0.5rem;
    background-color: blue;
    color:white;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    margin-top: 2rem;
`