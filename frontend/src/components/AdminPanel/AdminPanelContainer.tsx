
import { CircularProgress } from "@mui/material";
import useUsers from "../../hooks/useUsers"
import UsersList from "../Users/UsersList";

const AdminPanelContainer = () => {
    const { users , isLoading ,error } = useUsers();
    if(isLoading) return <CircularProgress />
    if(error) return <h2>{error.message}</h2>
    return(
        <div>
            <h2>Admin Panel</h2>
            <UsersList users={users} />
        </div>
    )
}

export default AdminPanelContainer