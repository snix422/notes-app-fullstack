import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../api/apolloClient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "../hooks/useAuth"
import { NotifyProvider } from "../hooks/useNotify"
import { NoteProvider } from "../hooks/useNoteContext"

const queryClient = new QueryClient()

const AppProvider = ({children}: any) => {
    return(
        <Router>
            <QueryClientProvider client={queryClient}>
            <ApolloProvider client={apolloClient}>
            <NotifyProvider>
            <AuthProvider>
            <NoteProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children} 
            </ThemeProvider>
            </NoteProvider>
            </AuthProvider>
            </NotifyProvider>
            </ApolloProvider>
            </QueryClientProvider>
        </Router>
    )
}

export default AppProvider