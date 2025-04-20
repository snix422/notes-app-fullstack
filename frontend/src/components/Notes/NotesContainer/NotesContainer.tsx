import NotesList from "../NotesList";
import { Wrapper } from "./NotesContainer.style";
import Title from "../../Title/Title";
import useNotes from "../../../hooks/useNotes";
import { useContext } from "react";
import NoteContext from "../../../context/NoteContext";
import { CircularProgress } from "@mui/material";
import { useNoteContext } from "../../../hooks/useNoteContext";



const NotesContainer = () => {

    const { filteredNotes, isLoading ,error , removeNote } = useNoteContext();
   
  
    if(isLoading) return <CircularProgress />
    if(error) return <h2>{error.message}</h2>
    
    return(
        <Wrapper>
            {filteredNotes.length === 0 ? <Title text="Brak notatek" variant="large" /> : <>
            <Title variant="large" text={`Twoje notatki: ${filteredNotes.length}`} />
            <NotesList notes={filteredNotes} removeNote={removeNote} /></>}
        </Wrapper>
    )
}

export default NotesContainer