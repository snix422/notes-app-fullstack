import { useContext } from "react"
import NoteContext from "../../../context/NoteContext"
import NotesList from "../NotesList";
import { Wrapper } from "./NotesContainer.style";
import Title from "../../Title/Title";
import useNotes from "../../../hooks/useNotes";



const NotesContainer = () => {
    //const {visibleNotes,removeNote} = useContext(NoteContext);
    const {notes, isLoading , error, removeNote} = useNotes();
    console.log(notes,'backend')
    //console.log(visibleNotes, "state")
    return(
        <Wrapper>
            <Title text={`Twoje notatki: ${notes.length}`} />
            <NotesList notes={notes} removeNote={removeNote} />
        </Wrapper>
    )
}

export default NotesContainer