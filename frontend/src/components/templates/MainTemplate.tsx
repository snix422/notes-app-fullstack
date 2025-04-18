import Snackbar from "@mui/material/Snackbar"
import ArticlesContainer from "../Articles/ArticlesContainer"
import Navbar from "../Navbar/Navbar"
import SearchBar from "../Searchbar/Searchbar"
import { ArticlesSection, MainContent, NavbarWrapper, SearchbarWrapper, Wrapper } from "./MainTemplate.style"
import { useNotify } from "../../hooks/useNotify"
import { Alert } from "@mui/material"

const MainTemplate = ({children}:any) => {
     const { notify, isOpenNotify,  dispatchNotify, handleClose } = useNotify();
    return(
        <Wrapper>
            <NavbarWrapper>
                <Navbar /> 
            </NavbarWrapper>
            <SearchbarWrapper>
                <SearchBar />
            </SearchbarWrapper>
            <MainContent>
                {children} 
            </MainContent>
            <ArticlesSection>
                <ArticlesContainer />
            </ArticlesSection>
            <Snackbar open={isOpenNotify} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <Alert
                                onClose={handleClose}
                                severity="success"
                                variant="filled"
                                sx={{ width: '100%' }}
                            >
                                {notify}
                            </Alert>
                        </Snackbar>
        </Wrapper> 
    )
}

export default MainTemplate