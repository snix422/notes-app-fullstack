import { NavBar, StyledLink } from "./Navbar.style"
import AuthLinks from "./AuthLinks"
import { useAuth } from "../../hooks/useAuth"

const Navbar = () => {
    const {user} = useAuth()
    return(
        <NavBar>
            {user && <><StyledLink to="/">Twoje notatki</StyledLink>
                <StyledLink to="/add-note">Dodaj notatkę</StyledLink></> }
            <AuthLinks />
        </NavBar>
    )
}

export default Navbar