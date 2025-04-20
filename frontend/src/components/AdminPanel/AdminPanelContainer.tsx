
import { CircularProgress } from "@mui/material";
import useUsers from "../../hooks/useUsers"
import UsersList from "../Users/UsersList";
import { AdminWrapper, TitleHeading } from "./AdminPanelContainer.style";

const AdminPanelContainer = () => {
    const { users , isLoading ,error } = useUsers();
    if(isLoading) return <CircularProgress />
    if(error) return <h2>{error.message}</h2>
    return(
        <AdminWrapper>
            <TitleHeading>Admin Panel</TitleHeading>
            <UsersList users={users} />
        </AdminWrapper>
    )
}

export default AdminPanelContainer