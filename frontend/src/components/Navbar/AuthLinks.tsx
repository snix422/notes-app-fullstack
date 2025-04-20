import { useAuth } from "../../hooks/useAuth"
import { AuthLink, AuthLinksContainer, LogOutButton } from "./AuthLinks.style"

const AuthLinks = () => {
    const { user,logOut } = useAuth()
    return(
        <AuthLinksContainer>
            {user ? <LogOutButton onClick={logOut}>Wyloguj się</LogOutButton> 
            : <><AuthLink to="/signin">Zaloguj się</AuthLink>
            <AuthLink to="/signup">Zarejestruj się</AuthLink></> }  
        </AuthLinksContainer>
    )
}

export default AuthLinks