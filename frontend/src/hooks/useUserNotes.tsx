import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getUserNotesByName } from "../api/notes"

const useUserNotes = (name:string) => {
   const { data : userNotes , isLoading , error } = useQuery({
    queryKey:['userNotes'],
    queryFn: () => getUserNotesByName(name)
   })

   return{
    userNotes,
    isLoading,
    error
   }
}

export default useUserNotes
