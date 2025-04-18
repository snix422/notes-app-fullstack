import { Link } from "react-router-dom"
import { NavBar, StyledLink } from "./Navbar.style"
import AuthLinks from "./AuthLinks"

const Navbar = () => {
    return(
        <NavBar>
            <StyledLink to="/">Twoje notatki</StyledLink>
            <StyledLink to="/add-note">Dodaj notatkę</StyledLink>
            <AuthLinks />
        </NavBar>
    )
}

export default Navbar