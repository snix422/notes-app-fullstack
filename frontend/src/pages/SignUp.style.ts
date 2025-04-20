import styled from "styled-components";

export const MainWrapper = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;

    @media(max-width:1024px){
        padding: 3rem 0;
        height: auto;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    margin-top: 4rem;
    width: 100%;
`

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid black;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    width: 30%;

    &:focus{
        outline:none;
    }

    @media (max-width:1400px){
        width: 40%;
    }

    @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Button = styled.button`
    border-radius: 0.5rem;
    background-color: blue;
    color:white;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    margin-top: 2rem;
    width: 20%;
    transition: 0.5s all;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width:1024px){
        width: 30%;
    }

    @media (max-width:768px){
        width: 70%;
    }
`