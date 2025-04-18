import NotesList from "../NotesList";
import { Wrapper } from "./NotesContainer.style";
import Title from "../../Title/Title";
import useNotes from "../../../hooks/useNotes";
import { useContext } from "react";
import NoteContext from "../../../context/NoteContext";



const NotesContainer = () => {
    const {visibleNotes,removeNote} = useContext(NoteContext);
    //const {notes, isLoading , error, removeNote} = useNotes();
    //console.log(notes,'backend')
    //console.log(visibleNotes, "state")
    //if(isLoading) return <h2>Ładowanie...</h2>
    return(
        <Wrapper>
            <Title text={`Twoje notatki: ${visibleNotes.length}`} />
            <NotesList notes={visibleNotes} removeNote={removeNote} />
        </Wrapper>
    )
}

export default NotesContainer