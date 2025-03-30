import { Link } from "react-router-dom"
import { NavBar, StyledLink } from "./Navbar.style"

const Navbar = () => {
    return(
        <NavBar>
            <StyledLink to="/">Twoje notatki</StyledLink>
            <StyledLink to="/add-note">Dodaj notatkę</StyledLink>
        </NavBar>
    )
}

export default Navbar