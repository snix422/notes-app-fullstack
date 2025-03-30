import { useContext } from "react"
import NoteContext from "../../../context/NoteContext"
import NotesList from "../NotesList";
import { Wrapper } from "./NotesContainer.style";
import Title from "../../Title/Title";



const NotesContainer = () => {
    const {visibleNotes,removeNote} = useContext(NoteContext);
    console.log(visibleNotes, "state")
    return(
        <Wrapper>
            <Title text={`Twoje notatki: ${visibleNotes.length}`} />
            <NotesList notes={visibleNotes} removeNote={removeNote} />
        </Wrapper>
    )
}

export default NotesContainer