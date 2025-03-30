import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { NoteContextProvider } from "../context/NoteContext"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../api/apolloClient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const AppProvider = ({children}: any) => {
    return(
        <Router>
            <QueryClientProvider client={queryClient}>
            <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                <NoteContextProvider>
                <GlobalStyle />
                {children}
                </NoteContextProvider>
            </ThemeProvider>
            </ApolloProvider>
            </QueryClientProvider>
        </Router>
    )
}

export default AppProvider