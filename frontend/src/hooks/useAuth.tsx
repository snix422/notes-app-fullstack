
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotify } from "./useNotify";
import NoteContext from "../context/NoteContext";
import { useNoteContext } from "./useNoteContext";

interface AuthContextType {
    user: { role: string; name: string } | null;
    loginUser: (credentials: { email: string; password: string }) => Promise<any>;
    registerUser: (credentials: { email: string; password: string; name: string}) => Promise<any>;
    logOut: () => void;
    loginLoading:boolean,
    registerLoading:boolean
}

interface AuthProviderType {
    children:React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider : React.FC<AuthProviderType> = ({children}) => {
    const queryClient = useQueryClient();
    const [user,setUser] = useState<{role:string,name:string} | null>(null)
    const navigate = useNavigate();
    const {dispatchNotify} = useNotify();

    useEffect(()=>{
        const storedUser = localStorage.getItem("userData");
        if(storedUser){
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.error("Błąd parsowania JSON:", error);
            }
        }
    },[])
    
    useEffect(() => {
        if(user) navigate('/');
    },[user])

    const loginMutation = useMutation({
        mutationFn: async (credentials:{email:string,password:string}) => login(credentials),
        onSuccess: (data:any) => {
            console.log("Logowanie udane:", data);
            const userData = {
                name:data.user.name,
                role:data.user.role
            }
            localStorage.setItem("token",data.token);
            localStorage.setItem("userData",JSON.stringify(userData));
            setUser(userData)
        },
        onError: (error) => {
            console.error("Błąd logowania:", error);
        }
    })

    const registerMutation = useMutation({
        mutationFn: async (credentials:{email:string,password:string,name:string}) => register(credentials),
        onSuccess: (data) => {
            console.log("Rejestracja udana:", data);
          },
          onError: (error) => {
            console.error("Błąd rejestracji:", error);
          },
    })

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setUser(null)
        dispatchNotify("Wylogowano pomyślnie")
        resetNotes();
        queryClient.removeQueries({queryKey:["notes-key"]})

    }

    

    return(
        <AuthContext.Provider value={{
            user,
            loginUser:loginMutation.mutateAsync,
            registerUser:registerMutation.mutateAsync,
            logOut,
            loginLoading:loginMutation.isPending,
            registerLoading:registerMutation.isPending
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}