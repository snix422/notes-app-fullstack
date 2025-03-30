import styled from "styled-components"
import NotesContainer from "../components/Notes/NotesContainer/NotesContainer"


const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding:30px;
    border:2px solid red;
`
const NotePage = () => {
    return(
        <Wrapper>
            <NotesContainer />
        </Wrapper>
    )
}

export default NotePage