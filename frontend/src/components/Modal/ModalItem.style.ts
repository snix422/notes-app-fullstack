import styled from "styled-components";

export const WrapperModal = styled.div`

    width: 40vw;
    height: 40vh;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
`

export const TitleHeading = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    color:${({theme}) => theme.colors.darkGrey};
`

export const DescriptionHeading = styled.h3`
    font-size: ${({theme}) => theme.fontSize.xl};
    color:${({theme}) => theme.colors.darkGrey};
`

export const CategoryLabel = styled.span`
position: absolute;
top: 5%;  /* Lekko obniżony */
left: 5%;  /* Lekko przesunięty od prawej krawędzi */
border-radius: 20px;  /* Zaokrąglony kształt */
background-color: #4CAF50;  /* Zielony, ale możesz zmienić */
color: white;
font-size: 16px;  /* Przyjemniejsza wielkość czcionki */
padding: 8px 16px;  /* Większe odstępy wewnętrzne */
text-align: center;  /* Centrowanie tekstu */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* Cień pod etykietą */
width: auto;  /* Zmienna szerokość, dopasowana do zawartości */
height: auto;  /* Zmienna wysokość, dopasowana do zawartości */
font-weight: bold;
letter-spacing: 0.5px;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: #45a049;  /* Jaśniejszy odcień zieleni na hover */
    transform: scale(1.05);  /* Powiększenie przy najechaniu */
}
`;

export const CloseIconImg = styled.img`
    position: absolute;
    top:5%;
    right: 5%;

    &:hover{
        cursor: pointer;
    }
`