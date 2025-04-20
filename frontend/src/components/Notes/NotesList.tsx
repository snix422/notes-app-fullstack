import styled from "styled-components"
import { Note } from "../../types/type"
import NoteItem from "./NoteItem"

interface NotesListProps {
    notes:Note[],
    removeNote?:(id:string) => void
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:flex-start;
    flex-wrap:wrap;
    margin-top: 4rem;
`

const NotesList : React.FC<NotesListProps> = ({notes,removeNote}) => {
    return(
        <Wrapper>
            {notes ? notes.map((note:Note) => <NoteItem key={note._id} data-testid="Note-Item" data={note} removeNote={removeNote} /> ) : null}
        </Wrapper>
    )
}

export default NotesList