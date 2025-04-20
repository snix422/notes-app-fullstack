import { DescriptionContainer, MainTitle, SubTitle } from "./StartPage.style"

const StartPage = () => {
    return(
        <DescriptionContainer>
            <MainTitle>Aplikacja służy do dodawania notatek , usuwania , filtrowania. Możliwe jest również tworzenie konta</MainTitle>
            <SubTitle>Aby móc korzystać z aplikacji należy się zalogować</SubTitle>
        </DescriptionContainer>
    )
}

export default StartPage