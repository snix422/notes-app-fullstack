import { useAuth } from "../../hooks/useAuth"
import { AuthLink, AuthLinksContainer } from "./AuthLinks.style"

const AuthLinks = () => {
    const { user,logOut } = useAuth()
    return(
        <AuthLinksContainer>
            <AuthLink to="/signin">Zaloguj się</AuthLink>
            <AuthLink to="/signup">Zarejestruj się</AuthLink>
            {user && <button onClick={logOut}>Wyloguj się</button>  }
        </AuthLinksContainer>
    )
}

export default AuthLinks