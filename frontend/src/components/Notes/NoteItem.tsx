import styled from "styled-components"
import { Note } from "../../types/type"
import ModalItem from "../Modal/ModalItem"
import { useState } from "react"


interface NoteItemProps {
    data:Note,
    size?: "small" | "medium" | "large",
    fontSize?:"small" | "medium" | "large"
    removeNote: (id:string) => void
}

const Wrapper = styled.div<{size?:"small" | "medium" | "large"}>`
    border-radius:20px;
    background-color:${({theme}) => theme.colors.white};
    height:${({size})=> size === "small" ? "20vh" : 
    size === "medium" ? "30vh" : 
    "40vh"};
    width:${({size}) => size === "small" ? "15vw" : 
    size === "medium" ? "20vw" : 
    "25vw"};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:white;
    padding:10px 30px 10px 30px;
    position:relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const TitleHeading = styled.h2<{ fontSize?: "small" | "medium" | "large" }>`
    font-size: ${({ theme, fontSize }) => 
        fontSize === "small" ? theme.fontSize.m : 
        fontSize === "medium" ? theme.fontSize.xl : 
        theme.fontSize.xxl};
    color:${({theme}) => theme.colors.black};
`


const ButtonsWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    position:absolute;
    bottom:10%;
`

const Button = styled.button<{isDelete?:boolean}>`
    background-color:${({isDelete,theme}) => isDelete ? theme.colors.error : theme.colors.warning};
    border: none;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
    }
     
`

const CategoryLabel = styled.span`
position: absolute;
top: 5%;  /* Lekko obniżony */
right: 5%;  /* Lekko przesunięty od prawej krawędzi */
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


const NoteItem : React.FC<NoteItemProps> = ({data,removeNote,size="medium",fontSize="medium"}) => {
    console.log(data)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);

     return(
        <Wrapper data-testid="Note-Item" size={size}>
            <TitleHeading fontSize={fontSize}>{data.title}</TitleHeading>
            <ButtonsWrapper>
            <Button isDelete={true} onClick={()=>removeNote(data._id)}>Delete</Button>
            <Button isDelete={false} onClick={openModal}>Pokaż więcej</Button>
            </ButtonsWrapper>
            {data.category ? <CategoryLabel>{data.category}</CategoryLabel>: null }
            <ModalItem isOpen={isOpenModal} handleClose={closeModal} data={data} />
        </Wrapper>
    )
}

export default NoteItem