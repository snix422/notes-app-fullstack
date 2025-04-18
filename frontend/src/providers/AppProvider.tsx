import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { NoteContextProvider } from "../context/NoteContext"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../api/apolloClient"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "../hooks/useAuth"
import { NotifyProvider } from "../hooks/useNotify"

const queryClient = new QueryClient()

const AppProvider = ({children}: any) => {
    return(
        <Router>
            <QueryClientProvider client={queryClient}>
            <ApolloProvider client={apolloClient}>
            <NotifyProvider>
            <AuthProvider>
            <ThemeProvider theme={theme}>
                <NoteContextProvider>
                <GlobalStyle />
                {children}
                </NoteContextProvider>
            </ThemeProvider>
            </AuthProvider>
            </NotifyProvider>
            </ApolloProvider>
            </QueryClientProvider>
        </Router>
    )
}

export default AppProvider