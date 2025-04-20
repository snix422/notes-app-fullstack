import { Link, useParams } from "react-router-dom"
import useUserNotes from "../hooks/useUserNotes";
import Title from "../components/Title/Title";
import { CenteredWrapper, ErrorHeading, Wrapper } from "./UserNotesPage.style";
import NotesList from "../components/Notes/NotesList";
import { CircularProgress } from "@mui/material";

const UserNotesPage = () => {
    const { name } = useParams();
    const {userNotes , isLoading , error} = useUserNotes(String(name))

    if(isLoading) return <CenteredWrapper><CircularProgress /></CenteredWrapper>
    if(error) return <CenteredWrapper><ErrorHeading>{error.message}</ErrorHeading></CenteredWrapper>

    return(
    <div>
        <Wrapper>
            {!userNotes || userNotes.length === 0 ? <Title text="Brak notatek" variant="large" /> : <>
            <Title variant="large" text={`Twoje notatki: ${userNotes.length}`} />
            <NotesList notes={userNotes} /></>}
            <Link to="/">Wróć</Link>
        </Wrapper>
    </div>
    )
}

export default UserNotesPage