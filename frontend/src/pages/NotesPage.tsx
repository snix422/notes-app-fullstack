import styled from "styled-components"
import NotesContainer from "../components/Notes/NotesContainer/NotesContainer"
import { useAuth } from "../hooks/useAuth"
import AdminPanelContainer from "../components/AdminPanel/AdminPanelContainer"


const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding:30px;
`
const NotePage = () => {
    const { user } = useAuth();
    
    return(
        <Wrapper>
            {user?.role === "admin" ? <AdminPanelContainer /> : <NotesContainer /> }
            
        </Wrapper>
    )
}

export default NotePage