import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getUsers } from "../api/auth"

const useUsers = () => {
    const { data : users, isLoading ,error } = useQuery({
        queryKey:['users'],
        queryFn: getUsers
    }) 

    return{
        users, isLoading , error
    }
}

export default useUsers