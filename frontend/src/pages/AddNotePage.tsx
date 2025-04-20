import styled from "styled-components"
import AddNoteForm from "../components/Notes/AddNoteForm/AddNoteForm"
import Title from "../components/Title/Title"


const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px;
    gap:30px;
`

const AddNotePage = () => {
    return(
        <Wrapper>
            <Title text="Dodaj notatkę" variant="large" />
            <AddNoteForm />
        </Wrapper>
    )
}

export default AddNotePage