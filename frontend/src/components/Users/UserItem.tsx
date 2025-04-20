import { Link } from "react-router-dom"
import { EmailHeading, LinkNotes, UserItemWrapper } from "./UserItem.style"

interface UserItemProps {
    data:any
}
const UserItem  : React.FC<UserItemProps> = ({data}) => {
    return(
        <UserItemWrapper>
            <EmailHeading>{data.email}</EmailHeading>
            <LinkNotes to={`/user/${data.name}`}>Zobacz notatki</LinkNotes>
        </UserItemWrapper>
    )
}

export default UserItem