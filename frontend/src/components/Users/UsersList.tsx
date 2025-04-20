import styled from "styled-components"
import { Note } from "../../types/type"
import UserItem from "./UserItem"

interface UserListProps {
    users:any[],
    //removeNote:(id:string) => void
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:flex-start;
    flex-wrap:wrap;
    margin-top: 4rem;
    gap:3rem;

    @media(max-width:1024px){
        justify-content: center;
    }
`

const UsersList : React.FC<UserListProps> = ({users}) => {
    return(
        <Wrapper>
            {users ? users.map((user:any) => <UserItem key={user._id} data-testid="Note-Item" data={user} /> ) : null}
        </Wrapper>
    )
}

export default UsersList