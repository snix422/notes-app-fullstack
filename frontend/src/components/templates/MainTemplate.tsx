import ArticlesContainer from "../Articles/ArticlesContainer"
import Navbar from "../Navbar/Navbar"
import SearchBar from "../Searchbar/Searchbar"
import { ArticlesSection, MainContent, NavbarWrapper, SearchbarWrapper, Wrapper } from "./MainTemplate.style"

const MainTemplate = ({children}:any) => {
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
        </Wrapper> 
    )
}

export default MainTemplate