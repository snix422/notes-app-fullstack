import styled from "styled-components"
import { Note } from "../../types/type"

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
    width:${({size}) => size === "small" ? "20vw" : 
    size === "medium" ? "30vw" : 
    "40vw"};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:white;
    padding:10px 30px 10px 30px;
    position:relative;
    border:2px solid blue;
`
const TitleHeading = styled.h2<{ fontSize?: "small" | "medium" | "large" }>`
    font-size: ${({ theme, fontSize }) => 
        fontSize === "small" ? theme.fontSize.s : 
        fontSize === "medium" ? theme.fontSize.m : 
        theme.fontSize.l};
    color:${({theme}) => theme.colors.black};
`

const ContentParagraph = styled.p<{ fontSize?: "small" | "medium" | "large" }>`
    font-size: ${({ theme, fontSize }) => 
        fontSize === "small" ? theme.fontSize.xs : 
        fontSize === "medium" ? theme.fontSize.s : 
        theme.fontSize.m}; 
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
    color:${({isDelete,theme}) => isDelete ? theme.colors.error : theme.colors.lightPurple};
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
    return(
        <Wrapper data-testid="Note-Item" size={size}>
            <TitleHeading fontSize={fontSize}>{data.title}</TitleHeading>
            <ButtonsWrapper>
            <Button isDelete={true} onClick={()=>removeNote(data.id)}>Delete</Button>
            <Button isDelete={false}>Pokaż więcej</Button>
            </ButtonsWrapper>
            {data.category ? <CategoryLabel>{data.category}</CategoryLabel>: null }
           
        </Wrapper>
    )
}

export default NoteItem